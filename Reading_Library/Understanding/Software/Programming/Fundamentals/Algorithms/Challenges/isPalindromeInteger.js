// https://leetcode.com/problems/palindrome-number/
// Problem: Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// - For example, 121 is palindrome while 123 is not.

// Pseudo Code
// Check for negative (Not palindrome number)
// For loop halfway through the number
// If numbers are not equal, return false
// After for loop, all numbers are equal, return true

function isPalindromeInteger(target) {
  targetString = target.toString()
  if (target < 0) {
    return false;
  }
  targetLength = targetString.length;
  for (let i = 0; i < targetLength / 2; i++) {
    if (targetString[i] != targetString[targetLength - i - 1]) {
      return false;
    }
  }
  return true;
}

target1 = 1234321;
target2 = 123343321;
target3 = -1234321;
target4 = 12234321;
console.log(isPalindromeInteger(target1));
console.log(isPalindromeInteger(target2));
console.log(isPalindromeInteger(target3));
console.log(isPalindromeInteger(target4));