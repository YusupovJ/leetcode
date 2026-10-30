function containsDuplicate(nums) {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
}

console.log(containsDuplicate([1, 1, 2, 3, 4, 4, 5, 5, 5, 5, 6, 7]));
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9]));
