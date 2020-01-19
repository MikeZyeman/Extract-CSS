import { File, CSSMedia, CSSElement, CSSClass, CSSID } from './syntaxes/css.syntaxes';
export default class ExtractCSS implements File {
    Medias: CSSMedia;
    Elements: CSSElement;
    Classes: CSSClass;
    IDs: CSSID;
    static PATH: string;
    private _pathToFile;
    pathToFile: string;
    constructor(path?: string);
}
//# sourceMappingURL=extract-css.d.ts.map