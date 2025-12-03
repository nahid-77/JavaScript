//1. let is block scoped: 
let x = 6;

if (true) {
    let y = 9;
    console.log(x); // 6
    console.log(y); // 9
}
console.log(x); // 6
//console.log(y); // Shows and error!


//2. Reassignment using let:
let n = 5;
console.log(n);    // 5

n = "Nahid";
console.log(n);    // Nahid


//3. Re-definition using let: 
let p = 99;

let p = "Jahid";
console.log(p);    // Shows and error!