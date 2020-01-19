interface CSSStyle {
    [key: string]: string | number;
}
interface CSSElement {
    [key: string]: CSSStyle;
}
interface CSSClass extends CSSElement {
}
interface CSSID extends CSSElement {
}
interface CSSMedia {
    query: string;
    Elements: CSSElement;
    Classes: CSSClass;
    IDs: CSSID;
}
interface File {
    Medias?: CSSMedia;
    Elements: CSSElement;
    Classes: CSSClass;
    IDs: CSSID;
}
export default class CSSFile {
    static getMedias(css: string[]): CSSMedia;
    static getClasses(css: string[]): CSSClass;
    static getElements(css: string[]): CSSElement;
    static getIDs(css: string[]): CSSID;
    private static getBracketsIndex;
    private static getArray;
}
export { File, CSSMedia, CSSClass, CSSID, CSSElement, CSSStyle };
//# sourceMappingURL=css.syntaxes.d.ts.map