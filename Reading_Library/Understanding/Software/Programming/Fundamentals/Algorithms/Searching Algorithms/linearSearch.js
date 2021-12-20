// https://www.geeksforgeeks.org/linear-search/

// Given an array arr[] of n elements, write a function to search a given element x in arr[]
// Input: arr[] = {10, 20, 80, 30, 60, 59, 119, 199, 139, 179}
// x = 110;
// Output: 6

// Time Complexity: O(N)
// Space Complexity: O(N)

function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}

arr1 = [10, 20, 80, 30, 60, 59, 119, 199, 139, 179];
target1 = 110;
target2 = 139;
console.log(linearSearch(arr1, target1));
console.log(linearSearch(arr1, target2));