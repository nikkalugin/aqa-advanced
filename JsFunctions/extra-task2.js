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