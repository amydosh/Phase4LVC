// JavaScript Fuction Constructor: It is utilized as a blueprint to create multiple objects of same type
// Can also be Parameterized or Non-Parameterized

// 1. Non-Parameterized Constructor:
function Person() {};   // Zero-argument constructor creates an empty object
// to create an object of the constructor, we have to use var assignment and new
var personObj = new Person();
console.log(personObj);


// 2. Parameterized Constructor
function Account(id, name, balance, email){
    // must initialize the properties with this keyword:
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.email = email;
}
let accountObj = new Account(1, "Andie", 150325.75, "andie.mydosh@gmail.com");
console.log(accountObj);
console.log(accountObj.id);
console.log(accountObj.name);


// 3. Create 100 different objects:
let accountObj1 = new Account(1, "Andie", 150325.75, "andie.mydosh@gmail.com");
let accountObj2 = new Account(2, "Joe", 148325.75, "joe.mydosh@gmail.com");
let accountObj3 = new Account(3, "Kyla", 325.75, "kyla.mydosh@gmail.com");
let accountObj4 = new Account(4, "Kade", 125.75, "kade.mydosh@gmail.com");

console.log(accountObj1);
console.log(accountObj2);
console.log(accountObj3);
console.log(accountObj4);