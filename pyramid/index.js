// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, col = 0, line = '') {
    // hits the last line
    if (n === row) {
        return;
    }

    // move forward to next line
    if ((2 * n - 1) === line.length) {
        console.log(line);
        return pyramid(n, row + 1)
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    const add = (midpoint - row <= col && midpoint + row >= col) ? '#' : ' ';
    pyramid(n, row, col + 1, line + add);
}

// 1 solution with for loop
// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1) / 2);
//     for (let row = 0; row < n; row += 1) {
//         let line = '';
//         for (let col = 0; col < (2 * n - 1); col += 1) {
//             if (midpoint - row <= col && midpoint + row >= col) {
//                 line += '#'
//             } else {
//                 line += ' '
//             }
//         }
//         console.log(line);
//     }
// }

module.exports = pyramid;
