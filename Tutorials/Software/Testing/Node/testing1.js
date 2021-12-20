// Assert object with equal function in it
var assert = {
  equal: function(firstValue, secondValue) {
    if (firstValue != secondValue)
        throw new Error('Assert failed, ' + firstValue + ' is not equal to ' + secondValue + '.');
        // Throw is a user defined exception.  
        // The current function will stop & 
        // control will be passed to the first catch block in the call stack
        // - 
      }
};

function addTwoNumbers(x, y) {
  // return x + y;
  return x + x; // deliberate bug!
}

console.log(addTwoNumbers(5, 1));

function testAddTwoNumbers() {

  // 1. ARRANGE: Preconditions & Inputs
  var x = 5;
  var y = 1;
  var sum1 = x + y;

  // 2. ACT: On the function
  var sum2 = addTwoNumbers(x, y);

  console.log("addTwoNumbers should return the sum of its two parameters.");
  console.log("Expect " + sum1 + " to equal " + sum2 + ".");

  // // 3. ASSERT: That the expected results have occurred
  // if (sum1 === sum2) {
  //   return console.log("Passed.");
  // }
  // console.log("Failed.");

  // 3. ASSERT: That the expected results have occurred
  try {
    assert.equal(sum1,sum2)
    console.log('Passed');
  } catch (error) {
    console.log(error.message)
  }
}

testAddTwoNumbers();
