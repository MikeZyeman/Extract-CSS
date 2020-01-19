"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const css_syntaxes_1 = __importDefault(require("./syntaxes/css.syntaxes"));
const fs = __importStar(require("fs-extra"));
class ExtractCSS {
    constructor(path = "") {
        this.Medias = {
            query: '',
            Elements: {},
            Classes: {},
            IDs: {},
        };
        this.Elements = {};
        this.Classes = {};
        this.IDs = {};
        this._pathToFile = "";
        this.pathToFile = path;
    }
    get pathToFile() {
        return this._pathToFile;
    }
    set pathToFile(path) {
        this._pathToFile = path;
        fs.readFile(path, 'utf8', (error, data) => {
            if (error)
                throw new Error('something went wrong');
            const array = data.split('\n').map((element) => element.replace(/^\s*/g, ''));
            this.Elements = css_syntaxes_1.default.getElements(array);
            this.IDs = css_syntaxes_1.default.getIDs(array);
            this.Classes = css_syntaxes_1.default.getClasses(array);
            this.Medias = css_syntaxes_1.default.getMedias(array);
            console.log(this.Classes);
        });
    }
}
ExtractCSS.PATH = "";
exports.default = ExtractCSS;
//# sourceMappingURL=extract-css.js.map