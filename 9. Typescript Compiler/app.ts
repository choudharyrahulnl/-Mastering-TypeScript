// CREATE tsconfig.json FILE USING COMMAND : tsc --init
interface Chicken {
    breed: string,
    eggsPerWeek: number,
    name: string
}
const norma: Chicken = {
    breed: "Silkie",
    eggsPerWeek: 4,
    name: 'Norma'
}

// WATCH TS CHANGES: tsc --watch app.ts
console.log("New change detected");
console.log("Yes it works, our JS file gets updated using watch");

//
