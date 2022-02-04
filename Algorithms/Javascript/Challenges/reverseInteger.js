// https://leetcode.com/problems/reverse-integer/
// signed integer: 32-bit datum that encodes an integer 
//  in the range of [-2147483648 to 2147483647]
// unsigned: nonnegative integer in the range [0 to 4294967295]

// Input: target
// Output: target reversed.  If outside of [-2147483648 to 2147483647], return 0
// Assumption: Environment doesn't allow storage of 64 bit integers
// Constraints: -2^31 <= x <= 2^31 - 1

// Pseudo Code:
// Turn Integer into string
// Split string into an array
// Loop through string array and reverse the characters
// - Push onto new array
// Join the array into a string
// Turn String into integer
// Check conditions
// Return target reversed or 0

function reverseInteger(target){
  k = 1;
  reversedString = []
  minLimit = -2147483648;
  maxLimit = 2147483647;

  if (target < 0){
    k = -1;
  }

  splitString = target.toString().split("")
  
  for (let i=0;i<splitString.length;i++){
    reversedString.push(splitString[splitString.length-i-1])
  }
  newInteger = parseInt(reversedString.join('')) * k

  if (newInteger < minLimit || newInteger > maxLimit){
    return 0
  }
  return newInteger
}
x= -9086955841
y = 120
z = 0
console.log(reverseInteger(x))
console.log(reverseInteger(y))
console.log(reverseInteger(z))





// Concise Solution

x= 9086955841
const reverse = x => {
  const limit = 2147483648;
  const k = x < 0 ? -1 : 1;
  const n = Number(String(Math.abs(x)).split('').reverse().join(''));
  return n > limit ? 0 : n * k;
};

// console.log(reverse(x))
