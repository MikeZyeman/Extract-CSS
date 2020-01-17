

interface Styles {
    [key: string]: string | number;
}
interface Element {
    [key: string]: Styles;
}
interface Class extends Element { 

};
interface ID extends Element { 

};

interface Media {
    query: string;
    Elements: Element[];
    Classes: Class[];
    IDs: ID[];
}
interface File {
    Medias: Media[];
    Elements: Element[];
    Classes: Class[];
    IDs: ID[];
}

interface PosSpan {
    start: number;
    end: number;
}

export default class CSSFile  {

    static getMedias(css: string[]): Media[] {
        let PosIndex: PosSpan[] = this.getBracketsIndex(css),
            medias: Media[] = [];
        const mediaStart = /^@media/gm;

        PosIndex.forEach((pos) => {
            if (css[pos.start].match(mediaStart)) {
                console.log(css[pos.start])
            }
        })

        return medias;
    }

    static getClasses(css: string[]): Class[] {
        let PosIndex: PosSpan[] = this.getBracketsIndex(css),
            classes: Class[] = [];
        const classStart = /\./gm;

        PosIndex.forEach((pos) => {
            if (css[pos.start].match(classStart)) {
                console.log(css.slice(pos.start, pos.end + 1))

                console.log()
            }
        })

        return classes;
    }

    static getElements(css: string[]): Element[] {
        let PosIndex: PosSpan[] = this.getBracketsIndex(css),
            elements: Element[] = [];
        const idStart = /^[a-zA-Z]/gm;

        PosIndex.forEach((pos) => {
            if (css[pos.start].match(idStart)) {

            }
        })

        return elements;
    }

    static getIDs(css: string[]): ID[] {
        let PosIndex: PosSpan[] = this.getBracketsIndex(css),
            ids: ID[] = [];
        const idStart = /\#/gm;

        PosIndex.forEach((pos) => {
            if (css[pos.start].match(idStart)) {
                    
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

    private static getArray(): String[] {


        return [];
    }
}

export {
    File, Media, Class, ID, Element, Styles
}

