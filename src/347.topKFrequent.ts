/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums: number[], k: number) {
  const map = new Map<number, number>();

  for (const num of nums) {
    const val = map.get(num);

    if (val) map.set(num, val + 1);
    else map.set(num, 1);
  }

  const buckets: Array<number[] | undefined> = new Array(nums.length + 1);

  for (const [num, freq] of map) {
    if (Array.isArray(buckets[freq])) {
      buckets[freq].push(num);
    } else {
      buckets[freq] = [num];
    }
  }

  const res: number[] = [];

  for (let i = buckets.length - 1; i >= 0; i--) {
    if (res.length === k) break;
    if (buckets[i]) res.push(...buckets[i]!);
  }

  return res.slice(0, k);
};

console.log(topKFrequent([1, 1, 2, 2, 3, 3], 2)); // [1, 2]
