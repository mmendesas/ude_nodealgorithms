// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let charMax = '';

    // mount the charMap
    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    // found the maxChar
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            charMax = char;
        }
    }
    return charMax;
}

module.exports = maxChar;
