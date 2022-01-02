// ARRAY: A structure of fixed size which can hold items
// of the same data type.
// Stores ordered collections

const array = [1, 3, 4, 3, 2, 3];

let mixedArray = [1, "3", "kiwi", 7, -22, false];
let numberArray = [1, 4, 7, 9, 22, -4, 53];
let stringArray = ["apple", "banana", "orange", "pepper", "lettuce"];

const numberArray1 = [1, 3, 5, 7, 9, 7, 8];
const numberArray2 = [6, 8, 9, 6, 0, 4];
const arrayLength = array.length;

function arrayPlayground(array1, array2) {
  console.log("Array 1: ", array1);
  console.log("Array 2: ", array2);
  console.log("array1.concat(array2): ", array1.concat(array2));
}

arrayPlayground(numberArray1, numberArray2);

function insertAtEnd(arr, item) {
  arr[arr.length] = item;
  return arr;
}

function insertAtBeginning(arr, item) {
  let newArr = [item];
  for (i = 0; i < arr.length; i++) {
    insertAtEnd(newArr, arr[i]);
  }
  return newArr;
}

function insertInMiddle(arr, item) {
  let i = 0;
  let newArr = [];
  let arrSplitLength = Math.floor(arr.length / 2);
  for (i = 0; i < arrSplitLength-1; i++) {
    newArr[i] = arr[i];
    console.log("i",i)
  }
  newArr[i+1]= item

  for (i; i < arr.length; i++) {
    newArr[i] = arr[i + 1];
  }
  return newArr
}

console.log(insertAtEnd(numberArray, 4));
console.log(insertAtBeginning(numberArray, 4));
console.log(insertInMiddle(numberArray,7))

module.exports = { array };
