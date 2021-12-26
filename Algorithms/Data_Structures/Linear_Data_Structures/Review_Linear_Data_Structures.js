// Reference: https://www.geeksforgeeks.org/data-structures/

function linearDataStructures() {
  const { array } = require("./Array.js");
  const { object } = require("./Object.js");
  const { fillStack, emptyStack } = require("./Stack.js");
  const { enqueue, dequeue } = require("./Queue.js");
  const { displayTestMap } = require("./Map.js");
  const util = require('util')
  const { linkedList } = require("./Linked_List/Singly_Linked_List.js");
  const { doublyLinkedList } = require("./Linked_List/Doubly_Linked_List.js");
  
  console.log("\nDATA STRUCTURES");
  
  console.log("\n - Arrays\n");
  console.log(
    "An array is a structure of fixed size which can hold items of the same data type."
  );

  console.log("\nThis is an Array:", array);

  console.log("\n - Objects\n");
  console.log(
    "An object is an unordered collection of related data of primitive or reference types, in the form of 'key' : value pairs."
  );

  console.log("\nThis is an Object:", object);

  console.log("\n - Stacks and Queues\n");
  console.log("Both are a linear structure which follows a particular order in which the operations are performed.");

  console.log("\n - Stacks\n");
  console.log("A stack is a linear structure which follows a First In Last Out (FILO) in which the operations are performed.");

  console.log("\nThis shows the operation of a stack:");
  emptyStack(fillStack());

  console.log("\n - Queues\n");
  console.log("A stack is a linear structure which follows a First In First Out (FIFO) in which the operations are performed.");

  console.log("\nThis shows the operation of a queue:");
  dequeue(enqueue());

  console.log("\n - Maps\n");
  console.log("A map is a collection of elements where each element is stored as a Key, Value pair where both the key and value can hold both objects and primitive values.");
  displayTestMap()

  console.log("\n - Linked Lists\n");
  console.log("A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers")
  console.log("\nThis is a ",util.inspect(linkedList,true,3))

  console.log("\nA doubly linked list has pointers to the next node as well as the previous node")
  console.log("\nThis is a ",util.inspect(doublyLinkedList,true,3))

}

module.exports = { linearDataStructures };
