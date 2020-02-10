interface CSSStyle {
    [key: string]: string | number;
}
interface CSSElement {
    [key: string]: CSSStyle;
}
interface CSSClass extends CSSElement { 

};
interface CSSID extends CSSElement { 

};

interface CSSMedia {
    query: string;
    Elements: CSSElement;
    Classes: CSSClass;
    IDs: CSSID;
}
interface CSSFile {
    Medias?: CSSMedia;
    Elements: CSSElement;
    Classes: CSSClass;
    IDs: CSSID;
}

interface PosSpan {
    start: number;
    end: number;
}

export {CSSStyle, CSSElement, CSSClass, CSSID, CSSMedia, CSSFile, PosSpan}