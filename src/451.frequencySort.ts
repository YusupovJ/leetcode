function frequencySort(s: string): string {
  const map = new Map<string, number>();
  const buckets = new Array(s.length + 1);

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const [char, freq] of map) {
    if (!buckets[freq]) {
      buckets[freq] = [];
    }

    for (let i = 1; i <= freq; i++) {
      buckets[freq].push(char);
    }
  }

  let res = "";

  for (let i = buckets.length - 1; i >= 0; i--) {
    const el = buckets[i];

    if (Array.isArray(el)) {
      res += el.join("");
    }
  }

  return res;
}

console.log(frequencySort("tree")); // "eert" или "eetr"
console.log(frequencySort("cccaaa")); // "cccaaa" или "aaaccc"
console.log(frequencySort("Aabb")); // "bbAa" или "bbaA"
