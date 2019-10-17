// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
var r = chunk([1, 2, 3, 4 , 5], 2);
console.log(r);
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  var i = 0;
  var result = [];
  while (i < array.length) {
    result.push(array.slice(i, i + size));
    i += size;
  }
  return result;
}

module.exports = chunk;

// function chunk(array, size) {
//     var num = array.length / size;
//     if (num % 1 > 0) num += 1 - (num % 1);
//     var result = [];
//     for (var i = 0; i < num; i++) {
//       result[i] = [];
//       for (var j = 0; j < size; j++) {
//         if (array.length < size * i + j + 1) break;
//         result[i].push(array[size * i + j]);
//       }
//     }
//     return result;
//   }
