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
interface File {
    Medias?: CSSMedia;
    Elements: CSSElement;
    Classes: CSSClass;
    IDs: CSSID;
}

interface PosSpan {
    start: number;
    end: number;
}

export default class CSSFile  {

    static getMedias(css: string[]): CSSMedia {
        let posIndex: PosSpan[] = this.getBracketsIndex(css),
            medias: CSSMedia = {
                query: '',
                Elements: {},
                Classes: {},
                IDs: {},
            };
        const mediaStart = /^@media/gm;

        posIndex.forEach((pos) => {
            if (css[pos.start].match(mediaStart)) {

            }
        })

        return medias;
    }

    static getClasses(css: string[]): CSSClass {
        let posIndex: PosSpan[] = this.getBracketsIndex(css),
            classes: CSSClass = {};

        posIndex.forEach((pos) => {
            if (css[pos.start].match(/\./gm)) {
                let classstyles: any = {};
                let name = css[pos.start].replace(/^(\.)|( \{)$/g, '');

                css.slice(pos.start + 1, pos.end).forEach((style) => {
                    let [key, value] = style.split(": ").map((s) => s.replace(/[;-]/g, ''));
                    classstyles[key] = value;
                })                
                classes[name] = classstyles;
            }
        })

        return classes;
    }

    static getElements(css: string[]): CSSElement {
        let posIndex: PosSpan[] = this.getBracketsIndex(css),
            elements: CSSElement = {};

        posIndex.forEach((pos) => {
            if (css[pos.start].match(/^[a-zA-Z]/gm)) {
                let elstyles: any = {};
                let name = css[pos.start].replace(/( \{)/g, '')

                css.slice(pos.start + 1, pos.end).forEach((style) => {
                    let [key, value] = style.split(": ").map((s) => s.replace(/[;-]/g, ''));
                    elstyles[key] = value;
                }) 

                elements[name] = elstyles;
            }
        })

        return elements;
    }

    static getIDs(css: string[]): CSSID {
        let posIndex: PosSpan[] = this.getBracketsIndex(css),
            ids: CSSID = {};

        posIndex.forEach((pos) => {
            if (css[pos.start].match(/\#/gm)) {
                let idstyles: any = {};
                let name = css[pos.start].replace(/^(\#)|( \{)$/g, '');

                css.slice(pos.start + 1, pos.end).forEach((style) => {
                    let [key, value] = style.split(": ").map((s) => s.replace(/[;-]/g, ''))
                    idstyles[key] = value;
                })
                ids[name] = idstyles;

            }
        })

        return ids;
    }

    private static getBracketsIndex(css: string[]): PosSpan[] {

        let starts: number[] = [], 
            ends: number[] = [],
            PosIndex: PosSpan[] = [];

        css.forEach((row, index) => {
            if (row.match(/({)/g)) {
                starts = [...starts, index]
            }
            if (row.match(/(})/g)) {
                ends = [...ends, index]
            }
        });

        if (starts.length != ends.length) throw new Error('Missing blocks');
        for (var i = 0; i < starts.length; i++) {
            
            let pos: PosSpan = {
                start: starts[i], 
                end: ends[i]
            }
            PosIndex = [...PosIndex, pos]
        }

        return PosIndex;
    }
}

export {
    File, CSSMedia, CSSClass, CSSID, CSSElement, CSSStyle
}

