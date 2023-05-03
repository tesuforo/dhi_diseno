declare type FontOptions = {
    src: Array<{
        path: string;
        weight?: string;
        style?: string;
        ext: string;
        format: string;
    }>;
    display: string;
    weight?: string;
    style?: string;
    fallback?: string[];
    preload: boolean;
    variable?: string;
    adjustFontFallback?: string | false;
    declarations?: Array<{
        prop: string;
        value: string;
    }>;
};
export declare function validateData(functionName: string, fontData: any): FontOptions;
export {};
