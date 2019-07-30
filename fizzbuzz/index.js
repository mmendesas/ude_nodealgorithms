// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        const isMultipleOf3 = i % 3 === 0;
        const isMultipleOf5 = i % 5 === 0;

        if (isMultipleOf3 && isMultipleOf5) {
            console.log('fizzbuzz');
        } else if (isMultipleOf5) {
            console.log('buzz');
        } else if (isMultipleOf3) {
            console.log('fizz');
        } else {
            console.log(i)
        }
    }
}

module.exports = fizzBuzz;
