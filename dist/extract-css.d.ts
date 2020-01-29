import { CSSMedia, CSSElement, CSSClass, CSSID } from './syntaxes/css.syntaxes';
export declare function ExtractCSS(path?: string): Promise<{
    Elements: CSSElement;
    IDs: CSSID;
    Classes: CSSClass;
    Medias: CSSMedia;
}>;
//# sourceMappingURL=extract-css.d.ts.map