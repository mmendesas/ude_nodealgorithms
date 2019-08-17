// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// 1 solution with regex
// function vowels(str) {
//     return str.replace(/[^aeiou]/gi, '').length;
// }

// 2 solution with forloop
// function vowels(str) {
//     let count = 0;
//     for (let char of str) {
//         if ('aeiou'.includes(char.toLowerCase())) {
//             count++;
//         }
//     }
//     return count;
// }

module.exports = vowels;
