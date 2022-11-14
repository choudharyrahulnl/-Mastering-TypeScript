// UNION TYPE
var age = 22;
age = 'Thirty';
var coordinates = { x: 2, y: 4 };
coordinates = { lat: 2, long: 4 };
// NARROW DOWN
var calculateTax = function (price, tax) {
    if (typeof price === "string") {
        price = parseInt(price.replace("$", ""));
    }
    return price * tax;
};
console.log(calculateTax(10, 5));
console.log(calculateTax("$10", 5));
