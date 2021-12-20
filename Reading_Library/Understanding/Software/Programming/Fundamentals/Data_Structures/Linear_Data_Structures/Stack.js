// STACK: // Queue: A linear structure which follows a 
// First In Last Out (FILO) in which the operations are performed.

function fillStack() {
  const stack = [];
  for (i = 0; i < 10; i++) {
    console.log("Fill: ", i);
    stack.push(i);
  }
  return stack;
}

// console.log(fillStack());

function emptyStack(stack) {
  while (stack.length > 0) {
    console.log("Remove: ",stack.pop());
  }
}

// emptyStack(fillStack());

module.exports = { fillStack, emptyStack };
