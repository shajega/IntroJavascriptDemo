let x = 10; 
let y = 5; 
let isEqual = (x == y); 
let isStrictEqual = (x === y); 
let isNotEqual = (x != y); 
let isStrictNotEqual = (x !== y); 
let isGreater = (x > y); 
let isLess = (x < y); 
let isGreaterOrEqual = (x >= y); 
let isLessOrEqual = (x <= y); 
 
console.log(isEqual); // Output: false 
console.log(isStrictEqual); // Output: false 
console.log(isNotEqual); // Output: true 
console.log(isStrictNotEqual); // Output: true 

console.log(isGreater); // Output: true 
console.log(isLess); // Output: false 
console.log(isGreaterOrEqual); // Output: true 
console.log(isLessOrEqual); // Output: false   