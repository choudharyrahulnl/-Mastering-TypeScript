// TYPESCRIPT IS COMPILING THE tsc FILE TO js FILE WHICH RUNS IN BROWSER USING tsc app.tsc
// WHICH GENERATES app.js
console.log("STARTING TYPESCRIPT, IT'S FUN");

// TYPESCRIPT CHECKS THE COMPILE TIME ERROR
// IF ITS STRING TYPE AND WE GIVE NUMBER IT WILL GIVE NUMBER
// ALSO WE CAN'T CHANGE THE TYPE LATER AS WELL
let movieName: string = 'The Hero';

// IF METHOD IS NOT AVAILABLE THEN ALSO IT WILL GIVE ERROR
movieName.toUpperCase();




// TYPE INFERENCE: WE DON'T NEED TO DEFINE TYPE
let schoolName = 'Army School';

// TS2322: Type 'number' is not assignable to type 'string'.
// schoolName = 1;



// ANY TYPE: IT ALLOW TO CHANGE THE TYPE OF VARIABLE
let areYouGoing: any = 'Yes';
areYouGoing = true;

// IF WE DONT GIVE ANY TYPE TYPESCRIPT WILL TAKE IT AS ANY
// const movies = ['The Hero', 'RRR'];
// let foundMovie;
// for (const movie of movies) {
//     if(movie === 'RRR') {
//         foundMovie = movie;
//     }
// }
// foundMovie();

// USE THIS WAY
const movies = ['The Hero', 'RRR'];
let foundMovie: string;
for (const movie of movies) {
    if(movie === 'RRR') {
        foundMovie = movie;
    }
}

