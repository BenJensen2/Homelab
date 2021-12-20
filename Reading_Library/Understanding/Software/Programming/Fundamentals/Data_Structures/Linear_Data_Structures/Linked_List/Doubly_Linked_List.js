// Doubly Linked List (DLL): Singly Linked List that contains an extra pointer,
// typically called previous pointer,
// together with next pointer and data which are there in singly linked list.

// Create the Node
class DLLNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null; // Added this.previous pointer
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // Now include a tail
  }

  isEmpty() {
    return this.head === null;
  }

  insertAtBack(val) {
    const newTail = new DLLNode(val); // Create new Tail to be used
    if (this.isEmpty()) {
      // If there is no head, make the new Tial to be the head and the tail
      this.head = newTail;
      this.tail = newTail;
      return;
    }
    // Connect the new tail to the tail of the current list
    this.tail.next = newTail;
    // Connect the old tail to the tail of the current list
    newTail.prev = this.tail;
    // Make the new tail the tail if the current list
    this.tail = newTail;
  }
}

const doublyLinkedList = new DoublyLinkedList();
// console.log(doublyLinkedList);
// console.log("\n New Doubly Linked List \n");
// console.log("Contents:  ", doublyLinkedList);
// console.log("Is it empty?", doublyLinkedList.isEmpty());
// console.log("\n Insert 7\n");
doublyLinkedList.insertAtBack(7);
// console.log("Contents:  ", doublyLinkedList);
// console.log("\n Insert 9\n");
doublyLinkedList.insertAtBack(9);
// console.log("Contents:  ", doublyLinkedList);
// console.log("\n Insert 3\n");
doublyLinkedList.insertAtBack(3);
// console.log("Contents:  ", doublyLinkedList);

module.exports = { doublyLinkedList };