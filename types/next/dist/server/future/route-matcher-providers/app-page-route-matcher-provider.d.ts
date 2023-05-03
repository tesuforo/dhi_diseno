import { AppPageRouteMatcher } from '../route-matchers/app-page-route-matcher';
import { Manifest, ManifestLoader } from './helpers/manifest-loaders/manifest-loader';
import { ManifestRouteMatcherProvider } from './manifest-route-matcher-provider';
export declare class AppPageRouteMatcherProvider extends ManifestRouteMatcherProvider<AppPageRouteMatcher> {
    private readonly distDir;
    constructor(distDir: string, manifestLoader: ManifestLoader);
    protected transform(manifest: Manifest): Promise<ReadonlyArray<AppPageRouteMatcher>>;
}
