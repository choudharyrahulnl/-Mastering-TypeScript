// TUPLES ARE SPECIAL TYPES EXCLUSIVE TO TYPESCRIPT (THEY DON'T EXIST IN JAVASCRIPT)
// TUPLES ARE ARRAY OF FIXED LENGTH AND ORDERED WITH SPECIFIC TYPE
var myTuple;
myTuple = [10, "typescript is fun"];
// NOT ALLOWED: Type 'string' is not assignable to type 'number'.
// myTuple = ["typescript is fun",10];
// EXAMPLE
var cssColorInRGB = [255, 0, 0];
cssColorInRGB.push(21);
console.log(cssColorInRGB);
