// Spread operator (...) helps you expand iterables into individual elements

let numbers = [100, 200, 300, 400];

// Add four numbers together
function calcSum(a, b, c, d){
    return a+b+c+d;
}

console.log("Total sum: "+calcSum(...numbers));


// Split string into character array:
let username = "amydosh";
console.log([...username]);


// Merging array elements:
let companies = ['Dell','Simplilearn','Apple','Amazon','Google'];
let otherCompanies = ['Lenovo','Ford','Cook Medical'];
// The below is the old method that we used to use to combine the two arrays:
// for(let comp of otherCompanies){
//     companies.push(comp);
// }
// console.log(companies);
companies = [...companies, ...otherCompanies];
console.log(companies);