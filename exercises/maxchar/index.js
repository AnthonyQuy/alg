// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
maxChar("abcccccccd") === "c";
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var data = {};
  var maxVal = 0;
  var maxChar = "";
  str.split("").forEach(e => {
    data[e] = data[e] ? data[e] + 1 : 1;
    if (maxVal < data[e]) maxChar = e;
  });
  return maxChar;
}

module.exports = maxChar;
