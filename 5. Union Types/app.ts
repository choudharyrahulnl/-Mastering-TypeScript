// UNION TYPE
let age: number|string = 22;
age = 'Thirty';

type Point = {
    x:number,
    y: number
}
type Loc = {
    lat: number,
    long: number
}
let coordinates: Point | Loc = {x:2,y:4};
coordinates = {lat: 2, long: 4}


// NARROWING THE TYPE: IS SIMPLY DOING A TYPE CHECK BEFORE WORKING WITH A VALUE
const calculateTax = (price:number|string,tax:number) => {
    if(typeof price === "string"){
        price = parseInt(price.replace("$",""));
    }
    return price * tax;
}
console.log(calculateTax(10,5));
console.log(calculateTax("$10",5));


// LITERAL TYPE: ONLY DEFINED VALUES ARE ALLOWED
const giveAnswer = (answer: "yes"|"no"|"maybe"): string  =>{
    return `The answer is ${answer}`;
}
console.log(giveAnswer("yes"));
console.log(giveAnswer("no"));

// NOT ALLOWED
// console.log(giveAnswer("I dont know"));


// EXAMPLE
let mood:"Happy"|"Sad" = "Happy";
mood = "Sad";
// NOT ALLOWED
// mood = "Confused"

// EXAMPLE
type DAY_OF_WEEK = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
let today:DAY_OF_WEEK = "MONDAY";