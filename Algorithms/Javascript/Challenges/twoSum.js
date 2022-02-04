// https://leetcode.com/problems/two-sum/
// Input: nums & target(int)
// Output: indices of the two nums that add up to target
// Assumptions: Each input, exactly one solution
// Can't Assume: Ordered or Sorted
// ROE: May not use the same element twice
// Can return the answer in any order

// Example 1
// Input: nums = [1,8,5,7,3], target = 10
// Output: [3,4]

// Constraints:
// 2 <=nums.length <=10^4
// -10^9 <=nums[i] <= 10^9
// -10^9 <= target <= 10^9
// Only one valid answer exists

// Pseudo Code:
// Search through nums array
// - Linear Search
// - Nested For loop
// Check to see if each pair adds up.  *Remember...only 1 solution*
// - If they add up, return index of the pair [firstNumber, secondNumber]
// Can we use recursion?
// More efficient way?

// Brute Force
// Time Complexity: O(n^2) due to Nested Loop
// Space complexity: O(1)
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}
nums1 = [1, 8, 5, 7, 3];
target1 = [10];
target2 = [9];
target3 = [15];
var start = +new Date(); // log start timestamp
console.log(twoSum(nums1, target1));
var end = +new Date(); // log end timestamp
var diff = end - start;
console.log(start, end, diff, "ms");
console.log(twoSum(nums1, target2));
console.log(twoSum(nums1, target3));

// Two-pass Hash Table (Trade space for speed)
// Time Complexity: O(1)
// Space Complexity: O(n)
function twoSumHashDouble(nums, target) {
  hashTable = {};
  for (i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = i;
  }
  for (i = 0; i < nums.length; i++) {
    secondNumber = target - nums[i];
    if (secondNumber in hashTable && hashTable[secondNumber] !=i)   {
      return [i,hashTable[secondNumber]];
    }
  }
}

console.log(twoSumHashDouble(nums1, target1));
console.log(twoSumHashDouble(nums1, target2));
console.log(twoSumHashDouble(nums1, target3));

// One-pass Hash Table (Trade space for speed)
// Time Complexity: O(n)
// Space Complexity: O(n)
function twoSumHashSingle(nums, target) {
  hashTable = {};
  for (i = 0; i < nums.length; i++) {
    secondNumber = target - nums[i];
    if (secondNumber in hashTable) {
      return [hashTable[secondNumber], i];
    }
    hashTable[nums[i]] = i;
  }
}

console.log(twoSumHashSingle(nums1, target1));
console.log(twoSumHashSingle(nums1, target2));
console.log(twoSumHashSingle(nums1, target3));

// References
// Hash Table: https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/
