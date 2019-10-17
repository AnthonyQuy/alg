// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
class Queue {
    constructor() {
      this.data = [];
    }
    add(item) {
      this.data.push(item);
    }
    remove() {
      return this.data.shift();
    }
  }


module.exports = Queue;
