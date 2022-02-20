// Spread operator (...) helps you expand iterables into individual elements

let numbers = [100, 200, 300, 400];

// Add four numbers together
function calcSum(a, b, c, d){
    return a+b+c+d;
}

console.log("Total sum: "+calcSum(...numbers));