"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs-extra"));
class ExtractCSS {
    constructor(path = "") {
        this.Medias = [];
        this.Elements = [];
        this.Classes = [];
        this.IDs = [];
        this._pathToFile = "";
        this.pathToFile = path;
    }
    get pathToFile() {
        return this._pathToFile;
    }
    set pathToFile(path) {
        this._pathToFile = path;
        let content = fs.readFileSync(path, 'base64');
        console.log(content);
    }
}
exports.default = ExtractCSS;
ExtractCSS.PATH = "";
//# sourceMappingURL=extract-css.js.map