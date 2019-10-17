// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
console.log(capitalize("a short sentence"));
function capitalize(str) {
  var arr = str.split(" ");
  return arr.map(val => val[0].toUpperCase() + val.slice(1)).join(" ");
}

module.exports = capitalize;
