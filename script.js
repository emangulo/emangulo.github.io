import encode from "./encoder-code128.mjs";

const inputText = 'sample';
const encodedText = encode(inputText);

console.log(encodedText);