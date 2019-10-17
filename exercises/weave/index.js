// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
var Queue = require("./queue");

const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
const queueTwo = new Queue();
queueTwo.add("Hi");
queueTwo.add("There");
const q = weave(queueOne, queueTwo);
console.log(q);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

function weave(sourceOne, sourceTwo) {
  const result = new Queue();
  var data1 = sourceOne.remove();
  var data2 = sourceTwo.remove();
  while (data1 || data2) {
    if(data1) {
      result.add(data1);
    }
    if(data2) {
      result.add(data2);
    }
    data1 = sourceOne.remove();
    data2 = sourceTwo.remove();
  }
  
  return result;
}

module.exports = weave;
