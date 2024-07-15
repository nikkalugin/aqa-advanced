/* Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case. */

function countDivisors(n) {
    let arr = []

    for (let i = 1; i <= n; i++) {

      n % i == 0 ? arr.push(i) : {}

    }

    return arr.length
}

const number1 = 4;
const result1 = countDivisors(number1);
console.log(`Number of divisors for ${number1}: ${result1}`);

const number2 = 5;
const result2 = countDivisors(number2);
console.log(`Number of divisors for ${number2}: ${result2}`);

const number3 = 12;
const result3 = countDivisors(number3);
console.log(`Number of divisors for ${number3}: ${result3}`);

const number4 = 30;
const result4 = countDivisors(number4);
console.log(`Number of divisors for ${number4}: ${result4}`);