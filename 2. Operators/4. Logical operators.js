// Logical operators are used to connect two or more expressions/conditions 
// to make decisions based on the criteria employed.

// 1. The AND operator(&&): 
// It returns true if both operands are true; otherwise, it returns false.
let flag1 = true;
let flag2 = false;
let flag3 = true;

console.log(flag1 && flag2);    // false
console.log(flag2 && flag3);    // false
console.log(flag1 && flag3);    // true

let num1 = 0;
let num2 = 1;
let num3 = 1;

console.log(num1 && num2);    // 0
console.log(num2 && num3);    // 1
console.log(num1 && num3);    // 0

// 2. The OR operator(||): 
// It returns true if at least one of the operands is true; 
// it returns false only if both operands are false.

let flag4 = false;
let flag5 = false;
let flag6 = true;

console.log(flag4 || flag5);    // false
console.log(flag5 || flag6);    // true
console.log(flag4 || flag6);    // true

let num4 = 0;
let num5 = 1;
let num6 = 0;

console.log(num4 || num5);    // 1
console.log(num5 || num6);    // 1
console.log(num4 || num6);    // 0

// 3. The NOT operator(!): 
// It negates the value of its operand. 
// If the operand is true, it returns false; if the operand is false, it returns true.

let flag7 = false;
let flag8 = true;
let flag9 = NaN;
let x = 45;
let isPresent = false;
let isRaining = true;

console.log(!flag7);      // true
console.log(!flag8);      // false
console.log(!flag9);      // true
console.log(!x);          // false
console.log(!isPresent);  // true
console.log(!isRaining);  // false