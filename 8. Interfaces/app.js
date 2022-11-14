function sayHappyBirthday(person) {
    return "Hi ".concat(person.name, " congrats you turned to ").concat(person.age);
}
var firstPerson = {
    id: 1,
    name: 'Rahul',
    age: 32,
    sayHi: function () {
        return "hello";
    },
    sayHiAgain: function (name) {
        return "Hello ".concat(name);
    },
    sayHiAgain2: function (name) {
        return "Hello ".concat(name);
    }
};
console.log(sayHappyBirthday(firstPerson));
console.log(firstPerson.sayHiAgain("Rahul"));
var miky = {
    name: 'Miky',
    age: 6,
    eat: function () {
        return "Started eating";
    }
};
console.log(miky);
