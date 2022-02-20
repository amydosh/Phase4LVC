// Closures: Nested Functions defined in another function
// Has access to three diff scope chains - 1. inner var/params; 2. outer var/params; 3. global vars

let firstName = "John";     // Global var

function fullNameMaker(){
    let middleName = "William";     // Local var of this particular function (outer var)
     
    // Nested function (closure):
    function combine(){             // This function can access first, middle and last names
        let lastName = "Smith";     // Local (inner) var
        return `${firstName} ${middleName} ${lastName}`;
    }
return combine();
}

let response = fullNameMaker();
console.log(response);
