function pivotIndex(nums: number[]): number {
  let lSum = 0;
  let total = 0;

  for (const num of nums) {
    total += num;
  }

  for (let i = 0; i < nums.length; i++) {
    const rSum = total - nums[i] - lSum;
    
    if (rSum === lSum) {
      return i;
    }
    
    lSum += nums[i];
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0
