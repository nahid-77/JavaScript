// 1. const is used to declare constants
const pie = 3.1416;
console.log(pie);      // 3.1416

pie = 7.1516;
console.log(pie);      // Shows an Error!


// 2. const requires initialization at the time of declaration:
let x;      // No Error

var y;      // No Error

const z;    // Shows an Error!


// 2. Value assigned to a constant cannot be changed: 

// In an object:
const person = {
    name: 'Nahid',
    age: 22
};

console.log(person.name);    // Nahid

// Modifying object properties is allowed
person.name = 'Jahid';
console.log(person.name);    // Jahid

// Reassigning the variable is not allowed
person = {};    // Shows an error!


// In an array: 
const numbers = [1, 2, 3];
console.log(numbers);    // [1, 2, 3]

// Modifying array elements is allowed
numbers.push(4);
console.log(numbers);    // [1, 2, 3, 4]

// Reassigning the variable is not allowed
numbers = []; // Shows an error!
