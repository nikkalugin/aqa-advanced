// Task: Create a method to see whether the string is ALL CAPS

const isUpperCase = str => /^(?=[A-Z])[A-Z\s]+$/.test(str);

console.log(isUpperCase('c')); 
console.log(isUpperCase('C')); 
console.log(isUpperCase('hello I AM DONALD')); 
console.log(isUpperCase('HELLO I AM DONALD')); 
console.log(isUpperCase('ACSKLDFJSgSKLDFJSKLDFJ'));
console.log(isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ')); 