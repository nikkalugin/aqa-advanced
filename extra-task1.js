// Extra task 1

const arr = [6, 2, 1, 8, 10];

const min = Math.min(...arr);
const max = Math.max(...arr);

const result = arr.reduce((sum, current) => sum + current, 0) - max - min;

console.log(result);

// Extra task 2

const arr1 = [1, 1, 11, 2, 3];

const min1 = Math.min(...arr1);
const max1 = Math.max(...arr1);

const result1 = arr1.reduce((sum, current) => sum + current, 0) - max1 - min1;

console.log(result1);