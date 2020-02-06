import CSSFile, {File, CSSMedia, CSSElement, CSSClass, CSSID} from './syntaxes/css.syntax';

import * as fs from 'fs-extra';

export async function ExtractCSS(path: string = '') {
    
    const raw = await fs.readFile(path, 'utf8')

    const array = raw.split('\n').map((element) => element.replace(/^\s*/g, ''));

    const Elements = CSSFile.getElements(array);
    const IDs = CSSFile.getIDs(array);
    const Classes = CSSFile.getClasses(array);
    const Medias = CSSFile.getMedias(array);

    return {
        Elements: Elements,
        IDs: IDs,
        Classes: Classes,
        Medias: Medias
    }
}



