// Immediately invoked function expression --> self-executing function
(function(){
    console.log("Immediately invoked function");
})();

// IIFE: initialization activity
(function(){
    let username = "amydosh";
    let age = 31;
    console.log(`The user ${username} is ${age} years old.`);

    // Nested function:
    function display(){
        console.log(`Nested function: The user ${username} is ${age} years old`);
    }
    display();
})();

let accName;
let accEmail;

(function(){
    accName = "Andie Mydosh";
    accEmail = "andie.mydosh@gmail.com"
})();
console.log(accName+" "+accEmail);