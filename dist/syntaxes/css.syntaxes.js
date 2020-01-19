"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
;
class CSSFile {
    static getMedias(css) {
        let posIndex = this.getBracketsIndex(css), medias = {
            query: '',
            Elements: {},
            Classes: {},
            IDs: {},
        };
        const mediaStart = /^@media/gm;
        posIndex.forEach((pos) => {
            if (css[pos.start].match(mediaStart)) {
            }
        });
        return medias;
    }
    static getClasses(css) {
        let posIndex = this.getBracketsIndex(css), classes = {};
        posIndex.forEach((pos) => {
            if (css[pos.start].match(/\./gm)) {
                let classstyles = {};
                let name = css[pos.start].replace(/^(\.)|( \{)$/g, '');
                css.slice(pos.start + 1, pos.end).forEach((style) => {
                    let [key, value] = style.split(": ").map((s) => s.replace(/[;-]/g, ''));
                    classstyles[key] = value;
                });
                classes[name] = classstyles;
            }
        });
        return classes;
    }
    static getElements(css) {
        let posIndex = this.getBracketsIndex(css), elements = {};
        posIndex.forEach((pos) => {
            if (css[pos.start].match(/^[a-zA-Z]/gm)) {
                let elstyles = {};
                let name = css[pos.start].replace(/( \{)/g, '');
                css.slice(pos.start + 1, pos.end).forEach((style) => {
                    let [key, value] = style.split(": ").map((s) => s.replace(/[;-]/g, ''));
                    elstyles[key] = value;
                });
                elements[name] = elstyles;
            }
        });
        return elements;
    }
    static getIDs(css) {
        let posIndex = this.getBracketsIndex(css), ids = {};
        posIndex.forEach((pos) => {
            if (css[pos.start].match(/\#/gm)) {
                let idstyles = {};
                let name = css[pos.start].replace(/^(\#)|( \{)$/g, '');
                css.slice(pos.start + 1, pos.end).forEach((style) => {
                    let [key, value] = style.split(": ").map((s) => s.replace(/[;-]/g, ''));
                    idstyles[key] = value;
                });
                ids[name] = idstyles;
            }
        });
        return ids;
    }
    static getBracketsIndex(css) {
        let starts = [], ends = [], PosIndex = [];
        css.forEach((row, index) => {
            if (row.match(/({)/g)) {
                starts = [...starts, index];
            }
            if (row.match(/(})/g)) {
                ends = [...ends, index];
            }
        });
        if (starts.length != ends.length)
            throw new Error('Missing blocks');
        for (var i = 0; i < starts.length; i++) {
            let pos = {
                start: starts[i],
                end: ends[i]
            };
            PosIndex = [...PosIndex, pos];
        }
        return PosIndex;
    }
    static getArray() {
        return [];
    }
}
exports.default = CSSFile;
//# sourceMappingURL=css.syntaxes.js.map