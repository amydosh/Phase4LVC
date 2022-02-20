// Function expression: defines a function by variable assignment
// Syntax: var x = function funcName(params) {//body}
// Can be parameterized or non-parameterized

// 1. Example: Non-Parameterized
var showData = function showMessage(){
    console.log("Hello! Welcome to JavaScript!");
}
// Call the function expression (shows the entire function expression):
console.log(showData);
// Function calling (to see the output):
showData();

// 2. Example: Anonymous Function Expression --> there is no function name
var displayData = function (){
    console.log("Hello! Welcome to JavaScript! This is an anonymous function expression");
}
// Call the function expression (shows the entire function expression):
console.log(displayData);
// Function calling (to see the output):
displayData();


// 3. Example: Anonymous Parameterized Function Expression --> there is no function name
var loadData = function (name,age,gender){
    console.log(`Hello user ${name}! Your age is ${age} and gender is ${gender}. Welcome to JavaScript! This is an anonymous function expression`);
}
// Function calling (to see the output):
loadData("Andie",31,"female");