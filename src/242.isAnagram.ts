/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const count: Record<string, number> = {};

  for (const char of s) {
    if (char in count) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  for (const char of t) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
