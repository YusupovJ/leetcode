/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (const str of strs) {
    const hashKey = Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
      hashKey[str.charCodeAt(i) - 97]++;
    }

    const key = hashKey.join("#");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(str);
  }

  return Array.from(map.values());
};

console.log(groupAnagrams(["ddddddddddg", "dgggggggggg"]));
