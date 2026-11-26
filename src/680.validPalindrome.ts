function validPalindrome(s: string) {
  for (let i = 0; i <= 1; i++) {
    let k = 1;
    let left = 0;
    let right = s.length - 1;
    const isLeftCanMakeMistake = i % 2 === 0;

    while (left <= right) {
      if (left === right || (right - left === 1 && s[left] === s[right])) {
        return true;
      }

      if (s[left] !== s[right]) {
        if (!k) {
          if (isLeftCanMakeMistake) break;
          else return false;
        }

        if (isLeftCanMakeMistake) left++;
        else right--;

        k--;
        continue;
      }

      left++;
      right--;
    }
  }
  return true;
}

console.log(validPalindrome("aba")); // true
console.log(validPalindrome("abca")); // true
console.log(validPalindrome("abc")); // false
console.log(validPalindrome("dasa")); // true
console.log(validPalindrome("deeeee")); // true
