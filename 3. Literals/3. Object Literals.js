// Object literals are a way to create objects in JavaScript using a concise syntax.
// They are defined using curly braces {} and consist of key-value pairs.
let person = {
    name: 'Jahid Ripon',
    age: 22,
    isRunning : true
};

console.log(person.name);      // Jahid Ripon
console.log(person.age);       // 22
console.log(person.isRunning); // true

// Adding a new property to the object
person.country = 'Bangladesh';
console.log(person.country);   // Bangladesh

// Modifying an existing property
person.age = 23;
console.log(person.age);       // 23

// Nested object literals
let student = {
    name: 'Parvaj Mosharraf',
    age: 12,
    address: {
        street: '7/A, Mirpur',
        city: 'Dhaka',
        country: 'Bangladesh'
    }
};
console.log(student.address.city);      // Dhaka
console.log(student.address.country);   // Bangladesh