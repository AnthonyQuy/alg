// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
console.log(palindrome("pennep"));
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split("").every((val,index) => {
    return val == str[str.length - index -  1]
  })
}

module.exports = palindrome;

// function palindrome(str) {
//     for(var i = 0; i < str.length / 2 ; i++){
//         if(str[i] != str[str.length - i - 1]) return false;
//     }
//     return true;
// }

// function palindrome(str) {
//     let a = str.substr(0, str.length / 2);
//     let b =
//       str.length % 2 == 1
//         ? str.slice(str.length - str.length / 2 + 1, str.length)
//         : str.slice(str.length - str.length / 2, str.length);
//     return (
//       a ==
//       b
//         .split("")
//         .reverse()
//         .join("")
//     );
//   }

// function palindrome(str) {
//     return str.split("").reverse().join("") === str;
//   }
  