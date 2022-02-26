// JavaScript class: added from ES6 as a new syntax to declare OOP
// Class expression syntax:
let Person = class {
    // NOTE: you can skip the declaration of properties because they are initialized within the constructor
    // // Properties
    // id;
    // name;
    // email;

    // To initialize these properties, we use a constructor (can NOT have same name as class):
    // Can only have ONE constructor per class (no overloading!)
    constructor(id,name,email){
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // You can also add methods within the class:
    showDetails(){
        console.log(`
            The Person details are as follows:
            id: ${this.id},
            name: ${this.name},
            email: ${this.email}
        `);
    }
}

// To use a JS class, we need to create an object for it:
let personObj = new Person(1,"Andie Mydosh","andie.mydosh@gmail.com");
console.log(personObj);
console.log(personObj.id);
console.log(personObj.name);
console.log(personObj.email);

personObj.showDetails();