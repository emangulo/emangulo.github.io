import encode from "./encoder-code128.js";

const inputText = 'sample';
const encodedText = encode(inputText);

console.log(encodedText);