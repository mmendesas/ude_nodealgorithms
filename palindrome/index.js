// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    })
}

// -----------------------------------------------------
// 1 solution using array reverse

// function palindrome(str) {
//     return str === str.split('').reverse().join('');
// }


// 2 solution with for, evaluating only half word

// function palindrome(str) {
//     const letters = str.split('');
//     let isEqual = false;
//     for (let i in letters) {
//         // this evaluate only the half word (fast than other solutions)
//         if (i <= (letters.length - i) - 1) {
//             // return false if letter is different
//             isEqual = letters[i] === letters[(letters.length - i) - 1];
//             if (!isEqual) {
//                 break;
//             }
//         }
//     }
//     return isEqual;
// }


// 3 solution with `every` array helper function

// function palindrome(str) {
//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1];
//     })
// }


module.exports = palindrome;
