import encode from "./encoder-code128";

const inputText = 'sample';
const encodedText = encode(inputText);

console.log(encodedText);