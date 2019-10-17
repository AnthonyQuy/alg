// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
anagrams("rail safety", "fairy tales");
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  stringA = stringA
    .toLowerCase()
    .replace(/[^\w]/g, "")
    .split("")
    .sort()
    .join("");
  stringB = stringB
    .toLowerCase()
    .replace(/[^\w]/g, "")
    .split("")
    .sort()
    .join("");
  return stringA === stringB;
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     stringA = stringA.toLowerCase().replace(/[^a-zA-Z0-9]/, "");
//     stringB = stringB.toLowerCase().replace(/[^a-zA-Z0-9]/, "");
//     if (stringA.length != stringB.length) return false;
//     else {
//       result = true;
//       var mapA = {};
//       var mapB = {};
//       for (var i = 0; i < stringA.length; i++) {
//         mapA[stringA[i]] = mapA[stringA[i]] ? mapA[stringA[i]] + 1 : 1;
//         mapB[stringB[i]] = mapB[stringB[i]] ? mapB[stringB[i]] + 1 : 1;
//       }

//       for (const e of Object.keys(mapA)) {
//         if (mapA[e] != mapB[e]) {
//           result = false;
//         }
//       }
//       return result;
//     }

// function anagrams(stringA, stringB) {
//     stringA = stringA.toLowerCase().replace(/[^\w]/g, "");
//     stringB = stringB.toLowerCase().replace(/[^\w]/g, "");
//     if (stringA.length != stringB.length) return false;
//     else {
//       result = true;
//       var mapA = {};
//       var mapB = {};
//       for (var i = 0; i < stringA.length; i++) {
//         mapA[stringA[i]] = mapA[stringA[i]] + 1 || 1;
//         mapB[stringB[i]] = mapB[stringB[i]] + 1 || 1;
//       }
//       for (let e in mapA) {
//         if (mapA[e] !== mapB[e]) return false;
//       }

//       return result;
//     }
//   }
