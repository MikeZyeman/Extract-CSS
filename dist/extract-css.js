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
async function ExtractCSS(path = '') {
    console.log(path);
    const raw = await fs.readFile(path, 'utf8');
    const array = raw.split('\n').map((element) => element.replace(/^\s*/g, ''));
    const Elements = css_syntaxes_1.default.getElements(array);
    const IDs = css_syntaxes_1.default.getIDs(array);
    const Classes = css_syntaxes_1.default.getClasses(array);
    const Medias = css_syntaxes_1.default.getMedias(array);
    return {
        Elements: Elements,
        IDs: IDs,
        Classes: Classes,
        Medias: Medias
    };
}
exports.ExtractCSS = ExtractCSS;
//# sourceMappingURL=extract-css.js.map