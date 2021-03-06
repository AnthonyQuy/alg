// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
  fizzBuzz(15);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (var i = 1; i <= n; i++) {
    var str = "";
    if (i % 3 == 0 || i % 5 == 0) {
      if (i % 3 == 0) str += "fizz";
      if (i % 5 == 0) str += "buzz";
    } else str = i;
    console.log(str);
  }
}

module.exports = fizzBuzz;
