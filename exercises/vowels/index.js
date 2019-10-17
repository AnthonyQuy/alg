// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
// console.log(vowels("Hi There!"));
// console.log(vowels(""));

//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
// console.log(vowels("Why?"));

function vowels(str) {
  var matcher = str.match(/[ueoai]/gi);
  return !matcher
    ? 0
    : matcher.filter((val, index) => {
        return matcher.indexOf(val) === index;
      }).length;
}

module.exports = vowels;

// function vowels(str) {
//   var matcher = str.match(/[ueoai]/gi);
//   return new Set(matcher).size;
// }

// function vowels(str) {
//     var shortString = str.toLowerCase().replace(/[^aeiou]+/g, "");
//     if (shortString === "") return 0;
//     return shortString.split("").reduce((prev = "", cur) => {
//       if (prev.indexOf(cur) === -1) return prev + cur;
//       return prev;
//     }).length;
//   }
// function vowels(str) {
//     var voString = "";
//     for (const item of str.toLowerCase()) {
//       if ("ueoai".indexOf(item) !== -1 && voString.indexOf(item) === -1) {
//         voString += item;
//       }
//     }
//     return voString.length;
//   }

// function vowels(str) {
//     var result = 0;
//     for (const item of "ueoai") {
//       if (str.indexOf(item) !== -1) {
//         result += 1;
//       }
//     }
//     return result;
//   }
