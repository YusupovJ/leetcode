function findAnagrams(s: string, p: string): number[] {
  if (s.length < p.length) return [];
  const res: number[] = [];
  const pArr = new Array(26).fill(0);
  const sArr = new Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    pArr[p.charCodeAt(i) - 97] += 1;
    sArr[s.charCodeAt(i) - 97] += 1;
  }

  let left = 0,
    right = p.length - 1;

  while (right < s.length) {
    let isEqual = true;
    for (let i = 0; i < 26; i++) {
      if (pArr[i] !== sArr[i]) {
        isEqual = false;
        break;
      }
    }

    if (isEqual) {
      res.push(left);
    }

    sArr[s.charCodeAt(left++) - 97] -= 1;
    sArr[s.charCodeAt(++right) - 97] += 1;
  }

  return res;
}

console.log(findAnagrams("cbaebabacd", "abc")); // [0, 6]
console.log(findAnagrams("abab", "ab")); // [0, 1, 2]
