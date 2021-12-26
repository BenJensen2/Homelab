// Binary Tree: A tree data structure composed of nodes,
// each of which has at most, two children,
// referred to as left and right nodes.

/* A Full Tree
                root
              <-- 25 -->
            /            \
          15             50
        /    \         /    \
      10     22      35     70
    /   \   /  \    /  \   /  \
  4    12  18  24  31  44 66  90
              leaves
  
       Each node has two leaves
*/

class Node {
  constructor(data) {
    this.data = data; // Data included in Node
    this.left = null; // Left Pointer
    this.right = null; // Right Pointer
  }
}

class BinaryTree {
  constructor() {
    this.root = null; // The beginning of a Binary Tree is the root
  }

  isEmpty() {
    //this.root will return null if there is no node associated with the Binary Tree
    if (this.root === null) {
      return true;
    } else if (this.root != null) {
      return false;
    }
    // Compact Version
    // return this.root === null;
  }

  breadthFirstDisplay() {
    if (this.isEmpty()) {
      // Check if empty
      console.log("This Tree is empty");
    } else {
      // Since it is not empty, set the root as current node and add it into the queue
      let currentNode = this.root;
      let currentLevel = 0;
      let currentLevelData = [];
      let lastCount = 0.5;
      let currentCount = 0;
      let currentTree = {};
      let queue = [this.root];
      while (queue.length > 0) {
        // Cycle through the tree until the queue is empty
        currentNode = queue.shift();
        currentLevelData.push(currentNode.data);
        // Take the first value and remove it from the queue
        if (currentNode.left) {
          // If there is a left leaf to the current node...
          queue.push(currentNode.left);
          // Add it to the queue
        }
        if (currentNode.right) {
          // If there is a right leaf to the current node...
          queue.push(currentNode.right);
          // Add it to the queue
        }

        // Increase the current count
        currentCount++;

        if (currentCount == lastCount * 2) {
          // If the current count is double of the last count,
          // that means this level is full

          // We will store each level of data in an object to be used later
          currentTree[`${currentLevel}`] = currentLevelData;
          //console.log("\n Current Level:", currentLevel); // Print current Level
          //console.log("Current Level Data: ", currentLevelData); // Print current Data
          currentLevelData = []; // Clear out current Data
          lastCount = currentCount; // Shift current count to the last count
          currentCount = 0; // Set the current count to 0
          currentLevel++; // Increase the current level count
        }
        // console.log("\n Current", currentNode);
        // console.log("\n Current Queue", queue, "\n");
        // Output the current Level, Node and queue at each step
      }
    }
  }

  insert(newData) {
    // We will start with a Breadth-First-Search (BFS)
    // where we search the tree from top (root) to bottom (leaves) and left to right.

    // This will allow us to insert the new data into the tree to constantly
    // be working toward a full tree

    // The simplest way to do this is create a while loop that inserts the children
    // of each node into a queue and keeps running until the queue is empty.

    // Since a queue is First In First Out (FIFO) it will cycle through
    // all the nodes from root to leaf and left to right (in this example)

    // It can be written to cycle in the reverse order.
    // Full article that goes in more depth: https://medium.com/basecs/breaking-down-breadth-first-search-cebe696709d9

    const newNode = new Node(newData);

    // Check to see if the tree is empty
    if (this.isEmpty()) {
      // If it is, add the newNode and the root
      this.root = newNode;
    } else {
      // Since it is not empty, set the root as current node and add it into the queue
      let currentNode = this.root;
      let queue = [this.root];

      while (queue.length > 0) {
        // Cycle through the tree until the queue is empty
        currentNode = queue.shift();
        // Take the first value and remove it from the queue

        if (currentNode.left) {
          // If there is a left leaf to the current node...
          queue.push(currentNode.left);
          // Add it to the queue
        } else if (currentNode.left == null) {
          // If there is not a left leaf to the current node...
          currentNode.left = newNode;
          // Insert the new node as the next left leaf
          break;
          // Break the while loop
        }

        if (currentNode.right) {
          // If there is a right leaf to the current node...
          queue.push(currentNode.right);
          // Add it to the queue
        } else if (currentNode.right == null) {
          // If there is not a right leaf to the current node...
          currentNode.right = newNode;
          // Insert the new node as the next right leaf
          break;
          // Break the while loop
        }
      }
    }
  }
}

const binaryTree = new BinaryTree();
console.log("\n New Binary Tree \n");
console.log("Contents:  ", binaryTree);
console.log("Is it empty?", binaryTree.isEmpty());
binaryTree.insert(10);
binaryTree.insert(15);
binaryTree.insert(8);
binaryTree.insert(20);
binaryTree.insert(22);
binaryTree.insert(25);
binaryTree.insert(27);
binaryTree.insert(29);
binaryTree.breadthFirstDisplay();
