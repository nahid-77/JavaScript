// An if-else-if statement is a conditional statement that allows us to test multiple conditions and 
// execute different blocks of code based on the outcome of those conditions.
// It is an extension of the if-else statement and provides additional flexibility for handling multiple scenarios.

// Syntax:
// if (condition-01) {
//      Code block to be executed if condition-01 is true
// } else if (condition-02) {
//      Code block to be executed if condition-02 is true
// } else {
//      Code block to be executed if all conditions are false
// }

// Example:
let weight = 50;

if (weight > 75) {
    console.log("You are Overweight");
} else if (weight > 50 && weight <= 75) {
    console.log("You are Fit");
} else {
    console.log("You are Underweight");
}

// Output : You are Underweight