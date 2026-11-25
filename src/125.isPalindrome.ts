function isPalindrome(s: string): boolean {
  let r = s.length - 1,
    l = 0;

  const regex = /[A-Za-z0-9]/;
  while (l <= r) {
    if (!regex.test(s[l])) {
      l++;
      continue;
    }
    if (!regex.test(s[r])) {
      r--;
      continue;
    }

    if (s[l].toLowerCase() === s[r].toLowerCase()) {
      r--;
      l++;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
