// Recursion Examples

// Countdown numbers to 1
function countDown(number) {
  // Display
  console.log(number);

  // Change State
  number -= 1;

  // Base Case
  if (number > 0) {
    countDown(number);
  }
}
countDown(10);

// Find the factorial
function factorial(factor) {
  // console.log(factor)
  if (factor === 0) {
    return 1;
  } else {
    return factor * factorial(factor - 1);
  }
}

console.log(factorial(7));

// Find the sum of the list
function sum(array) {
  console.log(array)
  let count = 0;
  if (array.length == 1) {
    return array[0];
  } else {
    return array[0] + sum(array[0 + count]);
  }
}

const sumArray = [1, 3, 4, 5, 8, 7, 3, 2, 1, 8];
console.log(sum(sumArray));
