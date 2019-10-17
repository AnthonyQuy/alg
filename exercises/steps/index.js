// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
// steps(4);
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, i = 0, step = "") {
  if (i === n) {
    return;
  }

  if (step.length === n) {
    console.log(step);
    return steps(n, i + 1);
  }

  const add = step.length <= i ? "#" : " ";
  steps(n, i, step + add);
}

module.exports = steps;

// function steps(n) {
//     for (var i = 1; i <= n; i++) {
//       console.log(gen("#", i) + gen(" ", n - i));
//     }
//   }
//   function gen(char, time) {
//     var result = "";
//     for (var i = 0; i < time; i++) {
//       result += char;
//     }
//     return result;
//   }
