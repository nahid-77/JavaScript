// Ternary Operators
// The ternary operator is a shorthand for an if-else statement. 
// It takes three operands: a condition, a value if the condition is true, 
// and a value if the condition is false.


// Syntax:
// (condition) ? (statement1) : (statement2);

// Example 1:
let age = 20;

(age >= 18) ? (console.log("Can Vote")) : (console.log("Cannot Vote"));
// Output : Can Vote

// Example 2:
let myAge = 17;

(myAge >= 18) ? (console.log("Can Drive")) : (console.log("Cannot Drive"));
// Output : Cannot Drive

// Example 3:
let number = 7;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result);  // Output: Odd

// Example 4:
let marks = 96;
let grade = (marks >= 90) ? 'A' :
            (marks >= 80) ? 'B' :
            (marks >= 70) ? 'C' :
            (marks >= 60) ? 'D' : 'F';
console.log(grade);  // Output: A