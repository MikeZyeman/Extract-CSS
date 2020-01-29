var {ExtractCSS} = require('../dist/extract-css');


async function getIndex() {
    const IndexCSS = await ExtractCSS("./test/index.css");

    console.log(IndexCSS)
}

getIndex();