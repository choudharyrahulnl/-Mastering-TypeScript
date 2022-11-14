// TUPLES ARE SPECIAL TYPES EXCLUSIVE TO TYPESCRIPT (THEY DON'T EXIST IN JAVASCRIPT)
// TUPLES ARE ARRAY OF FIXED LENGTH AND ORDERED WITH SPECIFIC TYPE
let myTuple: [number,string];
myTuple = [10,"typescript is fun"];

// NOT ALLOWED: Type 'string' is not assignable to type 'number'.
// myTuple = ["typescript is fun",10];

// EXAMPLE
const cssColorInRGB: [number,number,number] = [255,0,0];
// ONCE TUPLE CREATED IT ALLOWS TO ADD: ODD
cssColorInRGB.push(21);
cssColorInRGB.pop()
console.log(cssColorInRGB);