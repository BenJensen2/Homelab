"use strict";
const Node = require("./Node.js");

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(newData) {
    let tempNode = new Node(newData);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    return this;
  }

  isEmpty() {
    return this.head === null;
  }

  insertAtBack(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      return this;
    }

    let currentNode = this.head;

    while (currentNode.nextElement !== null) {
      currentNode = currentNode.nextElement;
    }

    currentNode.nextElement = newNode;
  }

  printList() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return false;
    } else {
      let temp = this.head;
      while (temp != null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(" -> ");
        temp = temp.nextElement;
      }
      console.log("null");
      return true;
    }
  }

  getHead() {
    return this.head;
  }

  setHead(newHead) {
    this.head = newHead;
    return this;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return null;
    } else {
      let str = "";
      let runner = this.head;
      while (runner !== null) {
        str += runner.data;
        if (runner.nextElement !== null) {
          str += " -> ";
        }
        runner = runner.nextElement;
      }
      str += "null";
      console.log("Current Linked List: ", str);
      return str;
    }
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode != null) {
      if (currentNode.data == value) {
        return true;
      }
      currentNode = currentNode.nextElement;
    }
    return false;
  }

  deleteAthead() {
    if (this.isEmpty()) {
      return this;
    }
    let firstElement = this.head;
    this.head = firstElement.nextElement;
    return this;
  }

  deleteVal(value) {
    let deleted = null;

    if (this.isEmpty()) {
      return false;
    }

    let currentNode = this.head;
    if (currentNode.data == value) {
      this.head = currentNode.nextElement;
      return true;
    }
    while (currentNode.nextElement != null) {
      if (currentNode.nextElement.data == value) {
        currentNode.nextElement = currentNode.nextElement.nextElement;
        return true;
      }
      currentNode = currentNode.nextElement;
    }
    deleted = false;
    return deleted;
  }

  deleteAtTail() {
    if (this.isEmpty()) {
      return this;
    }
    let currentNode = this.head;
    if (currentNode.nextElement == null) {
      this.deleteAtHead();
      return this;
    }
    while (currentNode.nextElement.nextElement != null) {
      currentNode = currentNode.nextElement;
    }
    currentNode.nextElement = null;
    return this;
  }

  seedFromArr(arr) {
    for (const element of arr) {
      this.insertAtBack(element);
    }
  }
}
