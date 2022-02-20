// var: function level scope - reassignable value
// let: block level scope - reassignable value
// const: block level scope - NOT reassignable

function display(){
    var statusFg = true;
    if(statusFg) {
        var itemOne = 'Apple MacBook xyz series';
        let itemTwo = 'Dell book xyz series';
        const itemThree = 'Lenovo book xyz series';

        itemTwo = 'Dell Book';
        itemThree = 'Lenovo SlimBook';  // variable-declaration.js:13 Uncaught TypeError: Assignment to constant variable.
    }
    console.log(itemOne);
    // console.log(itemTwo);       // variable-declaration.js:13 Uncaught ReferenceError: itemTwo is not defined
    // console.log(itemThree);     // variable-declaration.js:14 Uncaught ReferenceError: itemThree is not defined

    // console.log(statusFg);      // variable-declaration.js:19 Uncaught ReferenceError: statusFg is not defined
}
display();
console.log(statusFg);