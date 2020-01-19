let ExtractCSS = require('../dist/extract-css').default;

const IndexCSS = new ExtractCSS("./test/index.css");

console.log(IndexCSS);