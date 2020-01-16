

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

export default class CSSFile  {

    static getMedias(object: any): Media[] {
        return [];
    }

    static getClasses(): Class[] {
        return [];
    }

    static getElements(): Element[] {
        return [];
    }

    static getIDs(): ID[] {
        return [];
    }
}

export {
    File, Media, Class, ID, Element, Styles
}

