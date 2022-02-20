var showData = () => {
    console.log("Hello user, welcome to JS function expression");
}

showData();

let ageCalculator = (username, yearOfBirth) => {
    let currentYear = 2022;
    let age = currentYear - yearOfBirth;
    console.log(`Hello user: ${username}, your age is ${age}`);
    return age;
}

let result = ageCalculator("amydosh", 1990);
console.log(result);
ageCalculator("Joe Mydosh", 1988);

let dataLoad = () => {
    console.log("This is a one-liner arrow function");
}

dataLoad();
let response = fullNameMaker()