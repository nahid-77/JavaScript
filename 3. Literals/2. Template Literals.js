// Template literals are string literals that allow embedded expressions.
// They are enclosed by backticks (` `) instead of single or double quotes.
let num1 = 7;
let numr2 = 9;

let sum = num1 + num2;

console.log(`The sum of ${num1} + ${num2} is equal to ${sum}`); // The sum of 7 + 9 is equal to 16

// Multi-line strings using template literals:
let string1 = "My name is Nahid Hosen";
let string2 = "I am a front end web developer";

let multiLineString = `
    ${string1},
    ${string2}`

console.log(multiLineString);
// Output:
//     My name is Nahid Hosen,
//     I am a front end web developer