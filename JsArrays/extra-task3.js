

function betweenExtremes(numbers) {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
  
    const difference = max - min;
  
    return difference;
  }
  
const result = betweenExtremes([1, 434, 555, 34, 112]);
console.log(result);