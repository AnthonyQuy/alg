// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.

//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.arr = [];
  }
  push(i) {
    this.arr.push(i);
  }
  pop() {
    return this.arr.pop();
  }
  peek(){
      return this.arr[this.arr.length - 1]
  }
}
// --- Examples
const s = new Stack();
s.push(1);
s.push(2);
console.log(s.pop())
module.exports = Stack;