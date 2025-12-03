//1. var is function scoped:
function example() {
    var n = 7;
    console.log(n);
}

example();       // 7
//console.log(n);       // Shows an Error!


//2. Reassignment using var:
var x = 5;
console.log(x);    // 5

x = "Nahid";
console.log(x);    // Nahid


//3. Re-definition using var:
var x = 99;
console.log(x);    //  99

var x = "Jahid";
console.log(x);    // Jahid