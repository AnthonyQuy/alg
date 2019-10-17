// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args] === undefined) cache[args] = fn.apply(this,args);
    return cache[args];
  };
}

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);
console.log(fib(4));

// function fib(n, cache = [0, 1]) {
//   if (n >= cache.length) cache.push(fib(n - 1, cache) + fib(n - 2, cache));
//   return cache[n];
// }

// function fib(n) {
//     if (n <= 1) return n;
//     return fib(n - 1) + fib(n - 2);
//   }

module.exports = fib;

// function fib(n) {
//     if (n <= 1) return n;
//     return fib(n - 1) + fib(n - 2);
//   }

// function fib(n) {
//     var arr = [0, 1];
//     for (i = 2; i <= n; i++) {
//       arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//     }
//     return arr[n];
//   }
