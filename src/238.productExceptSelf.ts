function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const res: number[] = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  let suffix = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }

  return res;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]
