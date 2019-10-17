// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
function reverse(str) {
      return str.split("").reverse().join("");
}

module.exports = reverse;

// function reverse(str) {
//     return str
//     .split("").reverse().join();
// }

// function reverse(str) {
//     return str
//     .split("")
//     .reduce((pre, cur) => cur + pre);
// }

// function reverse(str) {
//     return str
//       .split("")
//       .reverse()
//       .reduce((pre, cur) => pre + cur);
//   }

// function reverse(str) {
//   let result = "";
//   for (const c of str) {
//     result = c + result;
//   }
//   return result;
// }
