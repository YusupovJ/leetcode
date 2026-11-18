function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) return false;

  const map = new Map<string, number>();

  for (let char of magazine) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of ransomNote) {
    const charCount = map.get(char);

    if (!charCount) return false;
    map.set(char, charCount - 1);
  }

  return true;
}

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
