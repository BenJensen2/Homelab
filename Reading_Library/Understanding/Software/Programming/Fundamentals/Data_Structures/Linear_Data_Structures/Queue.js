// Queue: A linear structure which follows a 
// First In First Out (FIFO) in which the operations are performed.

function enqueue() {
  const queue = [];
  for (i = 0; i < 10; i++) {
    console.log("Fill: ", i);
    queue.push(i);
  }
  return queue;
}

function dequeue(queue) {
  while (queue.length > 0) {
    console.log("Remove: ",queue.shift());
  }
}

module.exports = { enqueue, dequeue };