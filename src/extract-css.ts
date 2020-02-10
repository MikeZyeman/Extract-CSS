import CSSObject  from './syntaxes/css.syntax';
import {CSSFile, CSSMedia, CSSElement, CSSClass, CSSID } from './models/css.Models';

import * as fs from 'fs-extra';

export async function ExtractCSS(path: string = '') {
    
    const raw = await fs.readFile(path, 'utf8')

    const array = raw.split('\n').map((element) => element.replace(/^\s*/g, ''));

    const Elements: CSSElement = CSSObject.getElements(array);
    const IDs: CSSID = CSSObject.getIDs(array);
    const Classes: CSSClass = CSSObject.getClasses(array);
    const Medias: CSSMedia = CSSObject.getMedias(array);

    return {
        Elements: Elements,
        IDs: IDs,
        Classes: Classes,
        Medias: Medias
    }
}



