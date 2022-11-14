// EMPTY ARRAY
const emptyArray: [] = [];

// Argument of type 'number' is not assignable to parameter of type 'never'.
// emptyArray.push(1);

// NUMBER ARRAY
const emptyNumbers: number[] = [];
emptyNumbers.push(1);

const numbers: number[] = [1,2,3,4];

// NUMBER ARRAY ALTERNATIVE
const numbersAlternative: Array<number> = [1,2,3,4];

// OBJECT ARRAY
type Point = {
    x: number,
    y: number
}
const coordinates: Point[] = [];
coordinates.push({x:2,y:4});


// MULTIDIMENSIONAL ARRAY
const boardGame: string[][] = [['X','O','X'],['X','O','X']]


