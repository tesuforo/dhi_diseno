import { createDefaultMetadata } from "./default-metadata";
import { resolveOpenGraph, resolveTwitter } from "./resolvers/resolve-opengraph";
import { resolveTitle } from "./resolvers/resolve-title";
import { resolveAsArrayOrUndefined } from "./generate/utils";
import { isClientReference } from "../../build/is-client-reference";
import { getLayoutOrPageModule } from "../../server/lib/app-dir-module";
import { interopDefault } from "../interop-default";
import { resolveAlternates, resolveAppleWebApp, resolveAppLinks, resolveRobots, resolveThemeColor, resolveVerification, resolveViewport } from "./resolvers/resolve-basics";
import { resolveIcons } from "./resolvers/resolve-icons";
function mergeStaticMetadata(metadata, staticFilesMetadata) {
    if (!staticFilesMetadata) return;
    const { icon , apple , opengraph , twitter  } = staticFilesMetadata;
    if (icon || apple) {
        if (!metadata.icons) metadata.icons = {
            icon: [],
            apple: []
        };
        if (icon) metadata.icons.icon.push(...icon);
        if (apple) metadata.icons.apple.push(...apple);
    }
    if (twitter) {
        const resolvedTwitter = resolveTwitter({
            card: "summary_large_image",
            images: twitter
        }, metadata.metadataBase);
        metadata.twitter = {
            ...metadata.twitter,
            ...resolvedTwitter
        };
    }
    if (opengraph) {
        const resolvedOg = resolveOpenGraph({
            images: opengraph
        }, metadata.metadataBase);
        metadata.openGraph = {
            ...metadata.openGraph,
            ...resolvedOg
        };
    }
    return metadata;
}
// Merge the source metadata into the resolved target metadata.
function merge(target, source, staticFilesMetadata, titleTemplates) {
    const metadataBase = (source == null ? void 0 : source.metadataBase) || target.metadataBase;
    for(const key_ in source){
        const key = key_;
        switch(key){
            case "title":
                {
                    target.title = resolveTitle(source.title, titleTemplates.title);
                    break;
                }
            case "alternates":
                {
                    target.alternates = resolveAlternates(source.alternates, metadataBase);
                    break;
                }
            case "openGraph":
                {
                    target.openGraph = resolveOpenGraph(source.openGraph, metadataBase);
                    if (target.openGraph) {
                        target.openGraph.title = resolveTitle(target.openGraph.title, titleTemplates.openGraph);
                    }
                    break;
                }
            case "twitter":
                {
                    target.twitter = resolveTwitter(source.twitter, metadataBase);
                    if (target.twitter) {
                        target.twitter.title = resolveTitle(target.twitter.title, titleTemplates.twitter);
                    }
                    break;
                }
            case "verification":
                target.verification = resolveVerification(source.verification);
                break;
            case "viewport":
                {
                    target.viewport = resolveViewport(source.viewport);
                    break;
                }
            case "icons":
                {
                    target.icons = resolveIcons(source.icons);
                    break;
                }
            case "appleWebApp":
                target.appleWebApp = resolveAppleWebApp(source.appleWebApp);
                break;
            case "appLinks":
                target.appLinks = resolveAppLinks(source.appLinks);
                break;
            case "robots":
                {
                    target.robots = resolveRobots(source.robots);
                    break;
                }
            case "themeColor":
                {
                    target.themeColor = resolveThemeColor(source.themeColor);
                    break;
                }
            case "archives":
            case "assets":
            case "bookmarks":
            case "keywords":
            case "authors":
                {
                    // FIXME: type inferring
                    // @ts-ignore
                    target[key] = resolveAsArrayOrUndefined(source[key]) || null;
                    break;
                }
            // directly assign fields that fallback to null
            case "applicationName":
            case "description":
            case "generator":
            case "creator":
            case "publisher":
            case "category":
            case "classification":
            case "referrer":
            case "colorScheme":
            case "itunes":
            case "formatDetection":
            case "manifest":
                // @ts-ignore TODO: support inferring
                target[key] = source[key] || null;
                break;
            case "other":
                target.other = Object.assign({}, target.other, source.other);
                break;
            case "metadataBase":
                target.metadataBase = metadataBase;
                break;
            default:
                break;
        }
    }
    mergeStaticMetadata(target, staticFilesMetadata);
}
async function getDefinedMetadata(mod, props) {
    // Layer is a client component, we just skip it. It can't have metadata exported.
    // Return early to avoid accessing properties error for client references.
    if (isClientReference(mod)) {
        return null;
    }
    return (mod.generateMetadata ? (parent)=>mod.generateMetadata(props, parent) : mod.metadata) || null;
}
async function collectStaticImagesFiles(metadata, type) {
    if (!(metadata == null ? void 0 : metadata[type])) return undefined;
    const iconPromises = metadata[type].map(// TODO-APP: share the typing between next-metadata-image-loader and here
    async (iconResolver)=>interopDefault(await iconResolver()));
    return (iconPromises == null ? void 0 : iconPromises.length) > 0 ? await Promise.all(iconPromises) : undefined;
}
async function resolveStaticMetadata(components) {
    const { metadata  } = components;
    if (!metadata) return null;
    const [icon, apple, opengraph, twitter] = await Promise.all([
        collectStaticImagesFiles(metadata, "icon"),
        collectStaticImagesFiles(metadata, "apple"),
        collectStaticImagesFiles(metadata, "opengraph"),
        collectStaticImagesFiles(metadata, "twitter"), 
    ]);
    const staticMetadata = {
        icon,
        apple,
        opengraph,
        twitter
    };
    return staticMetadata;
}
// [layout.metadata, static files metadata] -> ... -> [page.metadata, static files metadata]
export async function collectMetadata(loaderTree, props, array) {
    const mod = await getLayoutOrPageModule(loaderTree);
    const staticFilesMetadata = await resolveStaticMetadata(loaderTree[2]);
    const metadataExport = mod ? await getDefinedMetadata(mod, props) : null;
    array.push([
        metadataExport,
        staticFilesMetadata
    ]);
}
export async function accumulateMetadata(metadataItems) {
    const resolvedMetadata = createDefaultMetadata();
    const resolvers = [];
    const generateMetadataResults = [];
    let titleTemplates = {
        title: null,
        twitter: null,
        openGraph: null
    };
    // Loop over all metadata items again, merging synchronously any static object exports,
    // awaiting any static promise exports, and resolving parent metadata and awaiting any generated metadata
    let resolvingIndex = 0;
    for(let i = 0; i < metadataItems.length; i++){
        const [metadataExport, staticFilesMetadata] = metadataItems[i];
        let metadata = null;
        if (typeof metadataExport === "function") {
            if (!resolvers.length) {
                for(let j = i; j < metadataItems.length; j++){
                    const [preloadMetadataExport] = metadataItems[j];
                    // call each `generateMetadata function concurrently and stash their resolver
                    if (typeof preloadMetadataExport === "function") {
                        generateMetadataResults.push(preloadMetadataExport(new Promise((resolve)=>{
                            resolvers.push(resolve);
                        })));
                    }
                }
            }
            const resolveParent = resolvers[resolvingIndex];
            const generatedMetadata = generateMetadataResults[resolvingIndex++];
            // In dev we clone and freeze to prevent relying on mutating resolvedMetadata directly.
            // In prod we just pass resolvedMetadata through without any copying.
            const currentResolvedMetadata = process.env.NODE_ENV === "development" ? Object.freeze(require("next/dist/compiled/@edge-runtime/primitives/structured-clone").structuredClone(resolvedMetadata)) : resolvedMetadata;
            // This resolve should unblock the generateMetadata function if it awaited the parent
            // argument. If it didn't await the parent argument it might already have a value since it was
            // called concurrently. Regardless we await the return value before continuing on to the next layer
            resolveParent(currentResolvedMetadata);
            metadata = generatedMetadata instanceof Promise ? await generatedMetadata : generatedMetadata;
        } else if (metadataExport !== null && typeof metadataExport === "object") {
            // This metadataExport is the object form
            metadata = metadataExport;
        }
        merge(resolvedMetadata, metadata, staticFilesMetadata, titleTemplates);
        // If the layout is the same layer with page, skip the leaf layout and leaf page
        // The leaf layout and page are the last two items
        if (i < metadataItems.length - 2) {
            var ref, ref1, ref2, ref3, ref4;
            titleTemplates = {
                title: ((ref = resolvedMetadata.title) == null ? void 0 : ref.template) || null,
                openGraph: ((ref1 = resolvedMetadata.openGraph) == null ? void 0 : (ref2 = ref1.title) == null ? void 0 : ref2.template) || null,
                twitter: ((ref3 = resolvedMetadata.twitter) == null ? void 0 : (ref4 = ref3.title) == null ? void 0 : ref4.template) || null
            };
        }
    }
    return resolvedMetadata;
}

//# sourceMappingURL=resolve-metadata.js.map