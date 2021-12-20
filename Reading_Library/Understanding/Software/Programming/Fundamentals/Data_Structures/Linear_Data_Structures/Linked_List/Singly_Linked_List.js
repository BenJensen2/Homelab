// Singly Linked List (SLL): A linked list is a linear data structure,
// in which the elements are not stored at contiguous memory locations.
// The elements in a linked list are linked using pointers

// Creates a class named "Node"
class Node {
  // Each Datapoint is a node
  constructor(data) {
    // The constructor initializes a new object of the Node class
    this.data = data; // Data included in Node
    this.next = null; // Pointer to next Node
    // ^ This will initially be null until another node is added to the list
  }
}

// Creates a class named "SinglyLinkedList"
class SinglyLinkedList {
  // Nodes combine to make a Linked List
  constructor() {
    // Every Linked List needs a head to start at
    this.head = null; // Head Node of the Linked List
  }

  // Checks to see if the list is empty
  isEmpty() {
    //This.head will return null if there is no head associated with the Linked List
    if (this.head === null) {
      return true;
    } else if (this.head != null) {
      return false;
    }
    // Compact Version
    // return this.head === null;
  }

  insertAtBack(val) {
    const newNode = new Node(val); // Creates a new node
    if (this.isEmpty()) {
      // If the list is empty, it creates a new node and places it at the head
      this.head = newNode;
      return;
    }

    // The runner will move through the list
    // Here it starts at the head of the list
    let runner = this.head;

    // Runs down the list until the last node is found
    // The last node will have a next = null property
    while (runner.next !== null) {
      // Moves the runner to the next node
      runner = runner.next;
    }

    // This adds the new node to the end of the list
    runner.next = newNode;
  }

  // Displays the values (data) of the linked list
  display() {
    // Creates an empty string
    let str = "";

    // Sets the runner
    let runner = this.head;

    // Runs down the list until the last node is found
    while (runner !== null) {
      // Adds each node data to the empty string
      str += runner.data;

      // Adds a comma between numbers
      if (runner.next !== null) {
        str += ", ";
      }
      // Moves the runner to the next node
      runner = runner.next;
    }
    console.log("Current Linked List: ", str);
    return str;
  }

  // Creates a singly linked list from an array
  seedFromArr(arr) {
    // Runs a for loop for each value in the array
    for (const element of arr) {
      // Inserts the current value in the array at the back of the singly linked list
      this.insertAtBack(element);
    }
  }
}

const linkedList = new SinglyLinkedList();
// console.log("\n New Singly Linked List \n");
// console.log("Contents:  ", linkedList);
// console.log("Is it empty?", linkedList.isEmpty());
// console.log("\n Insert 7\n");
linkedList.insertAtBack(7);
// console.log("Contents:  ", linkedList);
// console.log("\nInsert 9\n");
linkedList.insertAtBack(9);
// console.log("Contents:  ", linkedList);
// console.log("\nInsert 3\n");
linkedList.insertAtBack(3);
// console.log("Contents:  ", linkedList);
// console.log("\n");

// console.log("linkedList.head.next.next: ", linkedList.head.next.next);

// linkedList.display();


/* TO BE COPIED

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    } else if (this.head != null) {
      return false;
    }
  }

  insertAtBack(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      return;
    }

    let runner = this.head;

    while (runner.next !== null) {
      runner = runner.next;
    }

    runner.next = newNode;
  }

  display() {
    let str = "";

    let runner = this.head;

    while (runner !== null) {
      str += runner.data;
      if (runner.next !== null) {
        str += ", ";
      }
      runner = runner.next;
    }
    console.log("Current Linked List: ", str);
    return str;
  }

  seedFromArr(arr) {
    for (const element of arr) {
      this.insertAtBack(element);
    }
  }
}

// const linkedList = new SinglyLinkedList();
// console.log("\n New Singly Linked List \n");
// console.log("Contents:  ", linkedList);
// console.log("Is it empty?", linkedList.isEmpty());
// console.log("\n Insert 7\n");
// linkedList.insertAtBack(7);
// console.log("Contents:  ", linkedList);
// console.log("\nInsert 9\n");
// linkedList.insertAtBack(9);
// console.log("Contents:  ", linkedList);
// console.log("\nInsert 3\n");
// linkedList.insertAtBack(3);
// console.log("Contents:  ", linkedList);
// console.log("\n");
// linkedList.display();

 END COPY */

module.exports = { linkedList };
