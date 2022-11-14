// FUNCTION PARAM AS OBJECTS
function printName(person: {first: string, last: string}): void {
    console.log(`Hi ${person.first} ${person.last}`);
}
printName({first: 'Rahul', last: 'Choudhary'});

// TYPESCRIPT: Object literal may only specify known properties,
// and 'age' does not exist in type '{ first: string; last: string; }'.
// printName({first: 'Rahul', last: 'Choudhary', age:33});

// BUT THIS IS ALLOWED
// SO INLINE OBJECT ARE NOT ALLOWED BUT IF DEFINE IN SEPARATE VARIABLE
// THEN IT'S ALLOWED
 const person1 = {first: 'Rahul', last: 'Choudhary', age: 33};
 printName(person1);

// OBJECT
 let coordinate: {x:number,y:number} = {x:2,y:4};

function randomCoordinate(): {x:number,y:number} {
     return {x:Math.random(),y:Math.random()};
 }

// CLEAN WAY FOR OBJECTS
type Person = {
     name: string,
    age: number
}

const sayHappyBirthDay = (person: Person): string => {
    return `Hey ${person.name}, congrats on turning ${person.age}`;
}
console.log(sayHappyBirthDay({name: 'Rahul', age: 32}));

const rahul:Person = {name: 'Rahul', age: 32};
console.log(sayHappyBirthDay(rahul));


// NESTED OBJECTS
type Address = {
    street: string,
    country: string
}
type Employee = {
    name: string,
    company: string,
    address: Address
}

const employeeDetails = (emp: Employee): string => {
    return `Employee name ${emp.name} working as ${emp.company} living in ${emp.address.country}`;
}

const emp1: Employee = {
    name: 'Rahul',
    company: 'Freelancer',
    address: {
        street: 'Amsterdam',
        country: 'Netherlands'
    }
}

console.log(employeeDetails(emp1));

// OPTIONAL IN OBJECT
// TO CREATE OPTIONAL USE ? AFTER VARIABLE NAME
type Dimension = {
    x: number,
    y:number,
    z?:number
}

const printDimension = (dimension: Dimension): string => {
    return `x is ${dimension.x} & y is ${dimension.y} and z is optional ${dimension.z}`;
}
const firstDimension: Dimension = {x: 2, y:4, z: 6};
console.log(printDimension(firstDimension));
const secondDimension: Dimension = {x: 2, y:4};
console.log(printDimension(secondDimension));


// READONLY: WE CAN'T CHANGE ONCE ASSIGNED SOME VALUE
type User = {
    readonly id: number,
    username: string
}
const firstUser: User = {
    id: 1,
    username: 'rahul'
}

console.log(firstUser.id)

// Attempt to assign to const or readonly variable
//firstUser.id = 12;



// INTERSECTION
type Circle = {
    radius: number
}
type Colorful = {
    color: string
}
type ColorfulCircle = Circle & Colorful;
const happyFace: ColorfulCircle = {
    radius: 4,
    color: "green"
}

type Mood = Circle & Colorful & {face: string};
const happy: Mood = {
    radius: 4,
    color: "green",
    face: 'happy'
}

// EXERCISE
