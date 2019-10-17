// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples

const Stack = require("./stack");

class Queue {
  constructor() {
    this.data = new Stack();
    this.dataStack = new Stack();
  }

  add(item) {
      var i = this.data.pop();
      while(i){
          this.dataStack.push(i);
          i = this.data.pop();
      }
      this.dataStack.push(item);
      i = this.dataStack.pop();
      while(i){
          this.data.push(i);
          i = this.dataStack.pop();
      }
  }

  remove() {
    return this.data.pop();
  }

  peek() {
      console.log(this.data);
    return this.data.peek();
  }
}

const q = new Queue();
q.add(1);
q.add(2);
console.log(q.peek());  // returns 1
// q.remove(); // returns 1
// q.remove(); // returns 2

module.exports = Queue;
