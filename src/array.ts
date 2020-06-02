const list: number[] = [1,2,3];

const categories: Array<string> = 
['Sport','IT','Car'];

console.log('list');
list.forEach((num) => console.log(num.toFixed(2)));

console.log('categories');
categories.forEach((str) => {
  console.log(str.includes('a'))
});

var y = 10;

const listSquare = list.map(num => num * num);
console.log(listSquare);

const result = categories.filter(str => str.length > 2)
console.log(result);

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1));
// Error, Property 'substr' does not exist on type 'number'.

// x[3] = "world";
// // OK, 'string' can be assigned to 'string | number'
// x[5] = 100.25;
// console.log(x[5].toString());
// // OK, 'string' and 'number' both have 'toString'

// Expected:
//     [1, 4, 9]
//         ["Sport", "Car"]
// ello
// 100.25
// x[6] = true; // Error, 'boolean' isn't 'string | number'
// Expected: TS2322: Type 'true' is not assignable to type 'string | number'.