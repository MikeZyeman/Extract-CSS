import CSSFile, {File, CSSMedia, CSSElement, CSSClass, CSSID} from './syntaxes/css.syntaxes';

import * as fs from 'fs-extra';

export default class ExtractCSS implements File {

    Medias: CSSMedia = {
        query: '',
        Elements: {},
        Classes: {},
        IDs: {},
    }
    Elements: CSSElement = {};
    Classes: CSSClass = {};
    IDs: CSSID = {};

    static PATH: string = "";
    private _pathToFile: string = "";

    get pathToFile(): string {
        return this._pathToFile;
    }

    set pathToFile(path: string) {
        this._pathToFile = path;
        
        fs.readFile(path, 'utf8', (error, data) => {

            if (error) throw new Error('something went wrong');

            const array = data.split('\n').map((element) => element.replace(/^\s*/g, ''));

            this.Elements = CSSFile.getElements(array);
            this.IDs = CSSFile.getIDs(array);
            this.Classes = CSSFile.getClasses(array);
            this.Medias = CSSFile.getMedias(array);

            console.log(this.Classes);
        })
    }

    constructor(path: string = "") {
        this.pathToFile = path

    }

}



