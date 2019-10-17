// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
// pyramid(2);
//       ' # '
//       '###'
pyramid(4);
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (var floor = 0; floor < n; floor++) {
    var str = "";
    for (var pos = 0; pos < n * 2 - 1; pos++) {
      str +=
        n - floor - 1 <= str.length && str.length <= n + floor - 1 ? "#" : " ";
    }
    console.log(str);
  }
}

module.exports = pyramid;

// function pyramid(n, floor = 0, str = "") {
//     if (n === floor) return;

//     if (str.length === n * 2 - 1) {
//       console.log(str);
//       return pyramid(n, (floor += 1));
//     }

//     str += n - floor - 1 <= str.length && str.length <= n + floor - 1 ? "#" : " ";

//     return pyramid(n, floor, str);
//   }
