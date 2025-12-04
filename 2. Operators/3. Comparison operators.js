// Comparison operators are used to compare values and determine the relationship between them.
// These return a boolean value in the output.

let x = "5";
console.log(typeof(x));        // string

let y = 5;
console.log(typeof(y));         // number

// 1. Equal to operator (==)
console.log(x == y);            // true

// 2. strict Equal to operator (===) [equal value and equal type]
console.log(x === y);           // false

// 3. Not equal to operator (!=)
console.log(x != y);            // false

// 4. strict Not equal to operator (!==) [not equal value or not equal type]
console.log(x !== y);           // true

// 5. Greater than operator (>)
console.log(y > 3);             // true

// 6. Greater than or equal to operator (>=)
console.log(y >= 5);            // true

// 7. Less than operator (<)
console.log(y < 10);            // true

// 8. Less than or equal to operator (<=)
console.log(y <= 5);            // true

// 9. Ternary operator (condition ? value1 : value2)
let age = 18;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(canVote);           // Yes, can vote