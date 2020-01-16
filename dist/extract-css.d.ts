import { File, Media, Element, Class, ID } from './syntaxes/css.syntaxes';
export default class ExtractCSS implements File {
    Medias: Media[];
    Elements: Element[];
    Classes: Class[];
    IDs: ID[];
    static PATH: string;
    private _pathToFile;
    get pathToFile(): string;
    set pathToFile(path: string);
    constructor(path?: string);
}
//# sourceMappingURL=extract-css.d.ts.map