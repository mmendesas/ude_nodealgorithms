// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // create an array of arrays
    const spiral = []
    for (let i = 0; i < n; i++) {
        spiral.push([]);
    }
    let count = 1;

    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startCol <= endCol && startRow <= endRow) {
        // top row (left > right)
        for (let i = startCol; i <= endCol; i += 1) {
            spiral[startRow][i] = count;
            count++;
        }
        startRow++;

        // right collumn (up > down)
        for (let i = startRow; i <= endRow; i++) {
            spiral[i][endCol] = count;
            count++;
        }
        endCol--;

        // bottom row (right > left)
        for (let i = endCol; i >= startCol; i -= 1) {
            spiral[endRow][i] = count;
            count++;
        }
        endRow--;

        // start collumn (down > up)
        for (let i = endRow; i >= startRow; i -= 1) {
            spiral[i][startCol] = count;
            count++;
        }
        startCol++;
        console.table(spiral)
    }

    console.table(spiral)
    return spiral;
}

module.exports = matrix;
