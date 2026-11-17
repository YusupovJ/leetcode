function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0;

  const set = new Set(nums);
  let count = 1;

  for (let num of set) {
    if (!set.has(num - 1)) {
      for (let j = 1; j <= nums.length; j++) {
        if (!set.has(num + j)) {
          count = Math.max(count, j);
          break;
        }
      }
    }
  }

  return count;
}

console.log(longestConsecutive([100, 101, 4, 200, 1, 2, 3])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutive([])); // 0
console.log(longestConsecutive([4, 1, 2, 3])); // 4
