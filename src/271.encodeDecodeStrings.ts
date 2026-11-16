function encode(strs: string[]): string {
  let encodedStr = "";

  for (const str of strs) {
    encodedStr += `${str.length}#${str}`;
  }

  return encodedStr;
}

function decode(str: string): string[] {
  const decodedArr: string[] = [];
  let i = 0;

  while (i < str.length) {
    let j = str.indexOf("#", i);
    let l = str.slice(i, j);

    decodedArr.push(str.slice(j + 1, j + +l + 1));
    i = j + +l + 1;
  }

  return decodedArr;
}

// Тестовые вызовы
const test1 = ["neet", "code", "love", "you"];
const encoded1 = encode(test1);
console.log("Encoded 1:", encoded1);
console.log("Decoded 1:", decode(encoded1)); // ["neet", "code", "love", "you"]

const test2 = ["we", "say", ":", ";", "!@#$%^&*()"];
const encoded2 = encode(test2);
console.log("Encoded 2:", encoded2);
console.log("Decoded 2:", decode(encoded2)); // ["we", "say", ":", ";", "!@#$%^&*()"]

const test3 = ["", "###", ""];
const encoded3 = encode(test3);
console.log("Encoded 3:", encoded3);
console.log("Decoded 3:", decode(encoded3)); // ["", "###", ""]

const test4 = ["", "a"];
const encoded4 = encode(test4);
console.log("Encoded 3:", encoded4);
console.log("Decoded 3:", decode(encoded4)); // ["", "a"]
