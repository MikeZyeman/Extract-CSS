import StyleFile, {File, Media, Element, Class, ID} from './syntaxes/css.syntaxes';

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
        
        let content = fs.readFileSync(path, 'base64');
        console.log(content);

    }

    constructor(path: string = "") {
        this.pathToFile = path
    }

}



