function compress(chars: string[]): number {
  let writer = 0;
  for (let i = 0; i < chars.length; i++) {
    let count = 0;
    let char = chars[i];

    while (chars[i] === char) {
      count++;
      i++;
    }
    i--;

    chars[writer++] = char;
    if (count !== 1) {
      for (let c of count.toString()) {
        chars[writer++] = c;
      }
    }
  }

  chars.length = writer;

  return writer;
}
const chars1 = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars1), chars1); // Ожидается: 6, chars1 в начале: ["a","2","b","2","c","3"]

const chars2 = ["a"];
console.log(compress(chars2), chars2); // Ожидается: 1, chars2 в начале: ["a"]

const chars3 = [
  "a",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
];
console.log(compress(chars3), chars3); // Ожидается: 4, chars3 в начале: ["a","b","1","2"]
