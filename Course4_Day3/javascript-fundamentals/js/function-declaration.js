// function declaration: define a task by a function
// syntax: function functName(params) { //body }
// can have a parameterized or non-parameterized function

// 1. Example: Non-Parameterized
function showMessage() {
    console.log("Hello user, welcome to JavaScript!");
}
// in order to run the function above, you need to call it:
showMessage();


// 2. Example: Parameterized
function displayMessage(username) {
    console.log("Hello user: '"+username+"'! Welcome to JavaScript!");
}
// call the function:
displayMessage("Andie Mydosh");
displayMessage("John Smith");
displayMessage();


// 3. Example: Multiple Parameterized
function fetchContent(id, name, age){
    console.log(`Hello user ${id+100} with name ${name} and age ${age}`);
}
// call the function:
fetchContent(1, "Andie", 31);



// 4. Example: Default Parameterized
function displayContent(name="Tony", phone="555-555-5555"){
    console.log("Hello user "+name);
    console.log(`Your phone number is ${phone}`);
}
// call the function:
displayContent("Andie","248-464-4155");
displayContent();
displayContent("Joe");