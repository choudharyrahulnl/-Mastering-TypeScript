// FUNCTION PARAM AS OBJECTS
function printName(person) {
    console.log("Hi ".concat(person.first, " ").concat(person.last));
}
printName({ first: 'Rahul', last: 'Choudhary' });
// TYPESCRIPT: Object literal may only specify known properties,
// and 'age' does not exist in type '{ first: string; last: string; }'.
// printName({first: 'Rahul', last: 'Choudhary', age:33});
// BUT THIS IS ALLOWED
// SO INLINE OBJECT ARE NOT ALLOWED BUT IF DEFINE IN SEPARATE VARIABLE
// THEN IT'S ALLOWED
var person1 = { first: 'Rahul', last: 'Choudhary', age: 33 };
printName(person1);
// OBJECT
var coordinate = { x: 2, y: 4 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
var sayHappyBirthDay = function (person) {
    return "Hey ".concat(person.name, ", congrats on turning ").concat(person.age);
};
console.log(sayHappyBirthDay({ name: 'Rahul', age: 32 }));
var rahul = { name: 'Rahul', age: 32 };
console.log(sayHappyBirthDay(rahul));
var employeeDetails = function (emp) {
    return "Employee name ".concat(emp.name, " working as ").concat(emp.company, " living in ").concat(emp.address.country);
};
var emp1 = {
    name: 'Rahul',
    company: 'Freelancer',
    address: {
        street: 'Amsterdam',
        country: 'Netherlands'
    }
};
console.log(employeeDetails(emp1));
var printDimension = function (dimension) {
    return "x is ".concat(dimension.x, " & y is ").concat(dimension.y, " and z is optional ").concat(dimension.z);
};
var firstDimension = { x: 2, y: 4, z: 6 };
console.log(printDimension(firstDimension));
var secondDimension = { x: 2, y: 4 };
console.log(printDimension(secondDimension));
