// FUNCTION PARAM TYPE

// BY DEFAULT FUNCTION PARAM WILL BE OF TYPE ANY
// IT'S LIKE SAME WE DECLARE A VARIABLE WITHOUT ANY TYPE AND BY DEFAULT IT WILL BE OF TYPE ANY
// function square(num) {
//     return num * num;
// }
// square(2);
// square("hi");
// square(true);


// TYPE WITH PARAM
// function square(num:number=1) {
//     return num * num;
// }
// console.log(square());
// console.log(square(2));


// TYPE WITH PARAM AND DEFAULT VALUE
// function square(num:number=1) {
//     return num * num;
// }
// console.log(square());
// console.log(square(2));


// TYPE WITH PARAM & DEFAULT VALUE & RETURN TYPE WITH PARAM
// function square(num:number=1): number {
//     return num * num;
// }
// console.log(square());
// console.log(square(2));


// MULTI RETURN TYPE
// function random(num: number): number | string {
//     if(Math.random() < 0.5) {
//         return num.toString();
//     }
//     return num;
// }
//
// const add = (x:number,y:number): number => {
//     return x+y;
// }
//
// const hello = (): void => {
//     console.log("Hello");
// }

// NEVER: USED AS A RETURN TYPE FOR FUNCTIONS WHICH NEVER FINISH EXECUTING TASK
// const neverStop = (): never => {
//     while(true) {
//         console.log('I am still going on');
//     }
// }

// NEVER: USED AS A RETURN TYPE FOR FUNCTIONS WHICH THROWS AN ERROR
// const giveError = (): never => {
//     throw new Error('Error');
// }


// EXERCISE
const twoFer = (name:string = "you"):string => {
    return `One for ${name} one for me`;
}
console.log(twoFer());
console.log(twoFer('Elton'));

const isLeapYear = (year:number):boolean => {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return true;
    return false;
}
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));