// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//   console.log(matrix(2))
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    var result = Array(n).fill().map(()=> Array(n));
    var counter = 1;
    // console.log(result)
    for(var i = 0; i < Math.round(n / 2 + 0.2); i++){
        //Top
        for(var t = i; t < n - i ; t++){
            result[i][t] = counter++;
        }
        // console.log(result)
        //Right
        for(var r = i+1 ; r < n - i  ; r++){
            result[r][n - i - 1] = counter++;
        }
        // console.log(result)

        //Bottom
        for(var b = n - i - 2 ; b >= i ; b--){
            result[n - i - 1][b] = counter++;
        }
        // console.log(result)
        //left
        for(var l = n - i -2 ; l >= i + 1; l--){
            result[l][i] = counter++;
        }
        // console.log(result)


    }
    return result;
    
}

module.exports = matrix;
