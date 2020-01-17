import CSSFile, {File, Media, Element, Class, ID} from './syntaxes/css.syntaxes';

import * as fs from 'fs-extra';

export default class ExtractCSS implements File {

    Medias: Media[] = [];
    Elements: Element[] = [];
    Classes: Class[] = [];
    IDs: ID[] = [];

    static PATH: string = "";
    private _pathToFile: string = "";

    get pathToFile(): string {
        return this._pathToFile;
    }

    set pathToFile(path: string) {
        this._pathToFile = path;
        
        fs.readFile(path, 'utf8').then((data) => {
            const array = data.split('\n');
            array.map((element) => {
                element.replace(/^ */g, '');
                element.replace(/\r/g, '');

                console.log(element)
                return element;
            })

            /*
            this.Elements = CSSFile.getElements(array);
            this.IDs = CSSFile.getIDs(array);
            this.Classes = CSSFile.getClasses(array);
            this.Medias = CSSFile.getMedias(array);
            */
        }).catch((err) => {
            console.log(err)
        })
    }

    constructor(path: string = "") {
        this.pathToFile = path
    }

}



