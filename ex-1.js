// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); // flase
Object.is(0, -0); // false
Object.is(NaN, 100); // flase
Object.is("one", "two"); // flase
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); // flase
Object.is(null, undefined); //flase

10 === 20; // flase
10 === "10" // flase
3.14 !== 3.14; // flase
"TechUp" !== "TechUp"; // flase
NaN === NaN; // flase
0 !== -0; // flase

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB; // true
