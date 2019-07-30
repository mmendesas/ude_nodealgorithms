// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}

// 1 solution with reverse array helper

// function reverseInt(n) {
//     const isNegative = n < 0;
//     const strNum = n.toString().split('').reverse().join('');
//     const intNum = parseInt(strNum);
//     return isNegative ? -intNum : intNum;
// }


// 2 solution using Math.sign to discover if a number is negative or not

// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('');
//     return parseInt(reversed) * Math.sign(n);
// }

module.exports = reverseInt;
