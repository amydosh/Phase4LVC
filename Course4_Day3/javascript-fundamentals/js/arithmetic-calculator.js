// Arithmetic calculator with add, sub, mult, div, etc.

let add = function(num1, num2){
    return num1+num2;
}

let sub = function(num1, num2){
    return num1-num2;
}

let mul = function(num1, num2){
    return num1*num2;
}

let div = function(num1, num2){
    return num1/num2;
}

let avg = function(num1, num2){
    return (num1+num2)/2;
}

let calculator = function(num1, num2, calType){
    return calType(num1, num2);
}

let x = 5;
let y = 3;
// let result = calculator(x,y,add);
console.log(`X is ${x} + Y is ${y} = ${calculator(x,y,add)}`);
console.log(`X is ${x} - Y is ${y} = ${calculator(x,y,sub)}`);
console.log(`X is ${x} * Y is ${y} = ${calculator(x,y,mul)}`);
console.log(`X is ${x} / Y is ${y} = ${calculator(x,y,div)}`);
console.log(`Average of X ${x} & Y ${y} = ${calculator(x,y,avg)}`);