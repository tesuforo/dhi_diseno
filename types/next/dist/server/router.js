"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.makeResolver = exports.default = void 0;
var _requestMeta = require("./request-meta");
var _isApiRoute = require("../lib/is-api-route");
var _pathMatch = require("../shared/lib/router/utils/path-match");
var _prepareDestination = require("../shared/lib/router/utils/prepare-destination");
var _removePathPrefix = require("../shared/lib/router/utils/remove-path-prefix");
var _formatNextPathnameInfo = require("../shared/lib/router/utils/format-next-pathname-info");
var _getNextPathnameInfo = require("../shared/lib/router/utils/get-next-pathname-info");
var _removeTrailingSlash = require("../shared/lib/router/utils/remove-trailing-slash");
var _tracer = require("./lib/trace/tracer");
var _constants = require("./lib/trace/constants");
class Router {
    constructor({ headers =[] , fsRoutes =[] , rewrites ={
        beforeFiles: [],
        afterFiles: [],
        fallback: []
    } , redirects =[] , catchAllRoute , catchAllMiddleware =[] , matchers , useFileSystemPublicRoutes , nextConfig , localeNormalizer  }){
        this.nextConfig = nextConfig;
        this.headers = headers;
        this.fsRoutes = [
            ...fsRoutes
        ];
        this.rewrites = rewrites;
        this.redirects = redirects;
        this.catchAllRoute = catchAllRoute;
        this.catchAllMiddleware = catchAllMiddleware;
        this.matchers = matchers;
        this.useFileSystemPublicRoutes = useFileSystemPublicRoutes;
        this.localeNormalizer = localeNormalizer;
        // Perform the initial route compilation.
        this.compiledRoutes = this.compileRoutes();
        this.needsRecompilation = false;
    }
    get basePath() {
        return this.nextConfig.basePath || "";
    }
    setCatchallMiddleware(catchAllMiddleware) {
        this.catchAllMiddleware = catchAllMiddleware;
        this.needsRecompilation = true;
    }
    addFsRoute(fsRoute) {
        // We use unshift so that we're sure the routes is defined before Next's
        // default routes.
        this.fsRoutes.unshift(fsRoute);
        this.needsRecompilation = true;
    }
    compileRoutes() {
        /*
        Desired routes order
        - headers
        - redirects
        - Check filesystem (including pages), if nothing found continue
        - User rewrites (checking filesystem and pages each match)
      */ const [middlewareCatchAllRoute] = this.catchAllMiddleware;
        return [
            ...middlewareCatchAllRoute ? this.fsRoutes.filter((route)=>route.name === "_next/data catchall").map((route)=>({
                    ...route,
                    name: "_next/data normalizing",
                    check: false
                })) : [],
            ...this.headers,
            ...this.redirects,
            ...this.useFileSystemPublicRoutes && middlewareCatchAllRoute ? [
                middlewareCatchAllRoute
            ] : [],
            ...this.rewrites.beforeFiles,
            ...this.fsRoutes,
            // We only check the catch-all route if public page routes hasn't been
            // disabled
            ...this.useFileSystemPublicRoutes ? [
                {
                    type: "route",
                    name: "page checker",
                    match: (0, _pathMatch).getPathMatch("/:path*"),
                    fn: async (req, res, params, parsedUrl, upgradeHead)=>{
                        var ref;
                        // Next.js performs all route matching without the trailing slash.
                        const pathname = (0, _removeTrailingSlash).removeTrailingSlash(parsedUrl.pathname || "/");
                        // Normalize and detect the locale on the pathname.
                        const options = {
                            // We need to skip dynamic route matching because the next
                            // step we're processing the afterFiles rewrites which must
                            // not include dynamic matches.
                            skipDynamic: true,
                            i18n: (ref = this.localeNormalizer) == null ? void 0 : ref.match(pathname, {
                                // TODO: verify changing the default locale
                                inferDefaultLocale: true
                            })
                        };
                        const match = await this.matchers.test(pathname, options);
                        if (!match) return {
                            finished: false
                        };
                        return this.catchAllRoute.fn(req, res, params, parsedUrl, upgradeHead);
                    }
                }, 
            ] : [],
            ...this.rewrites.afterFiles,
            ...this.rewrites.fallback.length ? [
                {
                    type: "route",
                    name: "dynamic route/page check",
                    match: (0, _pathMatch).getPathMatch("/:path*"),
                    fn: async (req, res, _params, parsedCheckerUrl, upgradeHead)=>{
                        return {
                            finished: await this.checkFsRoutes(req, res, parsedCheckerUrl, upgradeHead)
                        };
                    }
                },
                ...this.rewrites.fallback, 
            ] : [],
            // We only check the catch-all route if public page routes hasn't been
            // disabled
            ...this.useFileSystemPublicRoutes ? [
                this.catchAllRoute
            ] : [], 
        ].map((route)=>{
            if (route.fn) {
                return {
                    ...route,
                    fn: (0, _tracer).getTracer().wrap(_constants.RouterSpan.executeRoute, {
                        attributes: {
                            route: route.name
                        }
                    }, route.fn)
                };
            }
            return route;
        });
    }
    async checkFsRoutes(req, res, parsedUrl, upgradeHead) {
        var ref;
        const fsPathname = (0, _removePathPrefix).removePathPrefix(parsedUrl.pathname, this.basePath);
        for (const route of this.fsRoutes){
            const params = route.match(fsPathname);
            if (!params) continue;
            const { finished  } = await route.fn(req, res, params, {
                ...parsedUrl,
                pathname: fsPathname
            });
            if (finished) {
                return true;
            }
        }
        // Normalize and detect the locale on the pathname.
        const options = {
            i18n: (ref = this.localeNormalizer) == null ? void 0 : ref.match(fsPathname, {
                // TODO: verify changing the default locale
                inferDefaultLocale: true
            })
        };
        const match = await this.matchers.test(fsPathname, options);
        if (!match) return false;
        // Matched a page or dynamic route so render it using catchAllRoute
        const params = this.catchAllRoute.match(parsedUrl.pathname);
        if (!params) {
            throw new Error(`Invariant: could not match params, this is an internal error please open an issue.`);
        }
        const { finished  } = await this.catchAllRoute.fn(req, res, params, {
            ...parsedUrl,
            pathname: fsPathname,
            query: {
                ...parsedUrl.query,
                _nextBubbleNoFallback: "1"
            }
        }, upgradeHead);
        return finished;
    }
    async execute(req, res, parsedUrl, upgradeHead) {
        // Only recompile if the routes need to be recompiled, this should only
        // happen in development.
        if (this.needsRecompilation) {
            this.compiledRoutes = this.compileRoutes();
            this.needsRecompilation = false;
        }
        // Create a deep copy of the parsed URL.
        const parsedUrlUpdated = {
            ...parsedUrl,
            query: {
                ...parsedUrl.query
            }
        };
        for (const route of this.compiledRoutes){
            var ref;
            // only process rewrites for upgrade request
            if (upgradeHead && route.type !== "rewrite") {
                continue;
            }
            const originalPathname = parsedUrlUpdated.pathname;
            const pathnameInfo = (0, _getNextPathnameInfo).getNextPathnameInfo(originalPathname, {
                nextConfig: this.nextConfig,
                parseData: false
            });
            if (pathnameInfo.locale && !route.matchesLocaleAPIRoutes && (0, _isApiRoute).isAPIRoute(pathnameInfo.pathname)) {
                continue;
            }
            if ((0, _requestMeta).getRequestMeta(req, "_nextHadBasePath")) {
                pathnameInfo.basePath = this.basePath;
            }
            const basePath = pathnameInfo.basePath;
            if (!route.matchesBasePath) {
                pathnameInfo.basePath = "";
            }
            if (route.matchesLocale && parsedUrlUpdated.query.__nextLocale && !pathnameInfo.locale) {
                pathnameInfo.locale = parsedUrlUpdated.query.__nextLocale;
            }
            if (!route.matchesLocale && pathnameInfo.locale === ((ref = this.nextConfig.i18n) == null ? void 0 : ref.defaultLocale) && pathnameInfo.locale) {
                pathnameInfo.locale = undefined;
            }
            if (route.matchesTrailingSlash && (0, _requestMeta).getRequestMeta(req, "__nextHadTrailingSlash")) {
                pathnameInfo.trailingSlash = true;
            }
            const matchPathname = (0, _formatNextPathnameInfo).formatNextPathnameInfo({
                ignorePrefix: true,
                ...pathnameInfo
            });
            let params = route.match(matchPathname);
            if ((route.has || route.missing) && params) {
                const hasParams = (0, _prepareDestination).matchHas(req, parsedUrlUpdated.query, route.has, route.missing);
                if (hasParams) {
                    Object.assign(params, hasParams);
                } else {
                    params = false;
                }
            }
            /**
       * If it is a matcher that doesn't match the basePath (like the public
       * directory) but Next.js is configured to use a basePath that was
       * never there, we consider this an invalid match and keep routing.
       */ if (params && this.basePath && !route.matchesBasePath && !(0, _requestMeta).getRequestMeta(req, "_nextDidRewrite") && !basePath) {
                continue;
            }
            if (params) {
                const isNextDataNormalizing = route.name === "_next/data normalizing";
                if (isNextDataNormalizing) {
                    (0, _requestMeta).addRequestMeta(req, "_nextDataNormalizing", true);
                }
                parsedUrlUpdated.pathname = matchPathname;
                const result = await route.fn(req, res, params, parsedUrlUpdated, upgradeHead);
                if (isNextDataNormalizing) {
                    (0, _requestMeta).addRequestMeta(req, "_nextDataNormalizing", false);
                }
                if (result.finished) {
                    return true;
                }
                if (result.pathname) {
                    parsedUrlUpdated.pathname = result.pathname;
                } else {
                    // since the fs route didn't finish routing we need to re-add the
                    // basePath to continue checking with the basePath present
                    parsedUrlUpdated.pathname = originalPathname;
                }
                if (result.query) {
                    parsedUrlUpdated.query = {
                        ...(0, _requestMeta).getNextInternalQuery(parsedUrlUpdated.query),
                        ...result.query
                    };
                }
                // check filesystem
                if (route.check && await this.checkFsRoutes(req, res, parsedUrlUpdated)) {
                    return true;
                }
            }
        }
        // All routes were tested, none were found.
        return false;
    }
}
exports.default = Router;
let _makeResolver = ()=>{};
if (// ensure this isn't bundled for edge runtime
process.env.NEXT_RUNTIME !== "edge" && // only load if we are inside of the turbopack handler
process.argv.some((arg)=>arg.endsWith("router.js"))) {
    _makeResolver = require("./lib/route-resolver").makeResolver;
}
const makeResolver = _makeResolver;
exports.makeResolver = makeResolver;

//# sourceMappingURL=router.js.map