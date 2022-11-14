// SAME AS type
interface Person {
    readonly id: number,
    name: string,
    age: number,
    address?: string,

    sayHi: () => string,
    sayHiAgain: (name: string) => string,
    sayHiAgain2(name: string): string
}

function sayHappyBirthday(person: Person) {
    return `Hi ${person.name} congrats you turned to ${person.age}`;
}

const firstPerson: Person = {
    id: 1,
    name: 'Rahul',
    age: 32,
    sayHi: () => {
        return "hello";
    },
    sayHiAgain: (name: string) => {
        return `Hello ${name}`;
    },
    sayHiAgain2: (name: string) => {
        return `Hello ${name}`;
    }
}

console.log(sayHappyBirthday(firstPerson));
console.log(firstPerson.sayHiAgain("Rahul"));

// INTERFACE EXTENDS INTERFACE
// WE CAN EXTENDS MULTIPLE INTERFACES
interface Pet {
    name: string,
    age:number
}

interface Dog extends Pet{
  eat(): string
}

const miky: Dog = {
    name: 'Miky',
    age: 6,
    eat() {
        return "Started eating"
    }
}
console.log(miky);


// DIFFERENCE BETWEEN type AND interface
// 1. interface CAN ONLY BE USED FOR OBJECTS WHERE type CAN WE USED WITH LITERAL, VARIABLES...
// 2. ONCE interface IS CREATED WE CAN AGAIN CREATE SAME INTERFACE AND ADD MORE PROPERTY
// 3. WE CAN EXTEND interface