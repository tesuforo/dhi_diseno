import { AppRouteRouteMatcher } from '../route-matchers/app-route-route-matcher';
import { Manifest, ManifestLoader } from './helpers/manifest-loaders/manifest-loader';
import { ManifestRouteMatcherProvider } from './manifest-route-matcher-provider';
export declare class AppRouteRouteMatcherProvider extends ManifestRouteMatcherProvider<AppRouteRouteMatcher> {
    private readonly distDir;
    constructor(distDir: string, manifestLoader: ManifestLoader);
    protected transform(manifest: Manifest): Promise<ReadonlyArray<AppRouteRouteMatcher>>;
}
