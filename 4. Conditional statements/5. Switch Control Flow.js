// Based on a condition, switch selects one or more code blocks to be executed.
// switch executes the code blocks that matches an expression.
// switch is often used as a more readable alternative to many if...else if...else statements,
// especially when dealing with multiple possible values.

// Syntax :
// switch(expression) {
//   case x:
//      code block
//     break;
//   case y:
//      code block
//     break;
//   default:
//      code block
// }

// Example: 
let num = 7;

switch (num) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Not a valid number";
}

console.log(day);   // Output: Not a valid number