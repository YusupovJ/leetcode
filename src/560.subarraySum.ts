function subarraySum(nums: number[], k: number): number {
  const map = new Map<number, number>();
  let sum = 0;
  let count = 0;

  map.set(0, 1);

  for (const num of nums) {
    sum += num;

    if (map.has(sum - k)) {
      count += map.get(sum - k)!;
    }

    map.set(sum, (map.get(sum) || 0) + 1)
  }

  return count;
}

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum([1, -1, 0], 0)); // 3
