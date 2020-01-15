

class CSSFile {
    constructor() {

    }
}

export default class ExtractCSS {

    static PATH: string = "";
    private _pathToFile: string = "";

    get pathToFile(): string {
        return this._pathToFile;
    }

    set pathToFile(path: string) {
        this._pathToFile = path;

    }

    constructor(path: string = "") {
        this.pathToFile = path
    }

}



