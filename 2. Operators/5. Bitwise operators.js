// Bitwise operators are used to do manipulation of individual bits 
// within the binary representation of numbers. 

// 1.
// Bitwise AND operator (&):
// It performs a logical AND operation on each pair of corresponding bits 
let num1 = 3;
let num2 = 2;

console.log(num1 & num2);       // 2
// Explanation: 
// 3 in binary:  0011
// 2 in binary:  0010
// Result:       0010 (which is 2 in decimal)

// 2. 
// Bitwise OR operator (|):
// It performs a logical OR operation on each pair of corresponding bits
let num3 = 5;
let num4 = 4;

console.log(num3 | num4);     // 5
// Explanation:
// 5 in binary:  0101
// 4 in binary:  0100
// Result:       0101 (which is 5 in decimal)

// 3. 
// Bitwise NOT operator (~):
// It inverts the bits of its operand
let num5 = 6;
let num6 = 7;
let num7 = -7;

console.log(~num5);    // -7
console.log(~num6);    // -8
console.log(~num7);    // 6
// Explanation:
// 6 in binary:   0000...0110
// Inverted:      1111...1001 (which is -7 in decimal in two's complement)

// 4. 
// Bitwise XOR operator (^):
// It performs a logical exclusive OR operation on each pair of corresponding bits
let num8 = 2;
let num9 = 4;

console.log(num8 ^ num9);     // 6
// Explanation:
// 2 in binary:  0010
// 4 in binary:  0100
// Result:       0110 (which is 6 in decimal)

// 5. 
// Left Shift operator (<<):
// It shifts the bits of the number to the left by the specified number of positions
let n1 = 8;
let n2 = 5;

// Note: The left shift operator effectively multiplies the left operand by 2 to the power of the right operand.

console.log(n1 << 3);     // 64
console.log(n2 << 2);     // 20
// Explanation:
// 8 in binary:   0000...1000
// Shifted left by 3:  0010...0000 (which is 64 in decimal)
// 5 in binary:   0000...0101
// Shifted left by 2:  0001...0100 (which is 20 in decimal)

// 6. 
// Right Shift operator (>>):
// It shifts the bits of the number to the right by the specified number of positions
let n3 = 7;
let n4 = 8;

// Note: The right shift operator effectively divides the left operand by 2 to the power of the right operand, discarding any fractions.

console.log(n3 >> 2);     // 1
console.log(n4 >> 2);     // 2
// Explanation:
// 7 in binary:   0000...0111
// Shifted right by 2:  0000...0001 (which is 1 in decimal)
// 8 in binary:   0000...1000
// Shifted right by 2:  0000...0010 (which is 2 in decimal)