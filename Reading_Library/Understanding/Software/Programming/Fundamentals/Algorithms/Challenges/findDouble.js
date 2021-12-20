// Using your favorite language,
// find all numbers that occur more than once in an array of integers.
// What is a second way you might do the same problem?
// Which approach would you prefer and why?

const arr = [1, 3, 4, 5, 4, 5, 3, 2, 2, 3, 4, 7, 7, 7, 5, 7, 8, 7, 9];

// Pseudo Code
// Two options: Frequency table and stacks

// Frequency Table
// Array1 is the input array
// Loop through array1
// Store the count of each number from array1 in a frequency table
// Loop through the frequency table
// Push numbers with count greater than 1 into array2
// Print & return array2

// Stacks
// Array1 is the input array
// Loop through array1
// Nested loop to compare current number to the rest of the array1
// Count how many times it occurs
// If it is more than one, push that number into array2
// Print & return array2


// Time Complexity: O(n)
// Space Complexity: O(1)
function findDoubleFreq(arr) {
  // Develop a frequency table to hold count of each numbers occurence
  var freq1 = {};

  // Loop through the array to insert each element into the frequency table
  for (i = 0; i < arr.length; i++) {
    // Check to see if the frequency table already has the current value in it.
    if (freq1.hasOwnProperty(arr[i])) {
      // If it does, increase the count
      freq1[arr[i]] += 1;
    } else {
      // If it doesn't insert it and give it a count of 1
      freq1[arr[i]] = 1;
    }
  }

  // Create Nested array of frequency table [[Key,Value],[Key,Value],[Key,Value]]
  freq1arr = Object.entries(freq1);
  // Create a final empty array
  var finalArr = [];
  // Loop through the frequency table array
  for (i = 0; i < freq1arr.length; i++) {
    // Check to see if the count is greater than 1
    if (freq1arr[i][1] > 1) {
      // If it is, push the key (converted into an integer) into the final array
      finalArr.push(parseInt(freq1arr[i][0]));
    }
  }
  // Display and return the final array
  console.log(finalArr);
  return finalArr;
}

findDoubleFreq(arr);

// Time Complexity: O(n^2)
// Space Complexity: O(1)
function findDoubleStacks(arr) {
  // Develop an empty array to put duplicates in
  var finalArr = [];
  // Loop through the input array
  for (i = 0; i < arr.length; i++) {
    var count1 = 0;
    // Loop through input array for each value in the input array
    for (j = i; j < arr.length; j++) {
      // Compare to see if there is a double
      if (arr[i] == arr[j]) {
        // If there is, increase the count
        count1 += 1;
      }
    }
    // If the count is greater than one
    if (count1 > 1) {
      var count2 = 0;
      // Loop through the final array
      for (k = 0; k < finalArr.length; k++) {
        // Check to see if the value is already in the final array
        if (arr[i] == finalArr[k]) {
          // If it is, increase the count
          count2 += 1;
        }
      }
      // If the count is still 0, insert the value
      if (count2 == 0) {
        finalArr.push(arr[i]);
      }
    }
  }
  // Sort from smallest to largest
  finalArr.sort(function (a, b) {
    return a - b;
  });
  // Display and return the final array
  console.log(finalArr);
  return finalArr;
}

findDoubleStacks(arr);
