/* In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata. */

function isEven(n) {
    if (typeof n !== 'number' || isNaN(n)) {
      return false; 
    }
    
    return n % 2 === 0;
  }

const result1 = isEven(4);
console.log(result1);

const result2 = isEven(-3.14);
console.log(result2);

const result3 = isEven(`Hi`);
console.log(result3);