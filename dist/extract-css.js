"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CSSFile {
    constructor() {
    }
}
class ExtractCSS {
    constructor(path = "") {
        this._pathToFile = "";
        this.pathToFile = path;
    }
    get pathToFile() {
        return this._pathToFile;
    }
    set pathToFile(path) {
        this._pathToFile = path;
    }
}
exports.default = ExtractCSS;
ExtractCSS.PATH = "";
//# sourceMappingURL=extract-css.js.map