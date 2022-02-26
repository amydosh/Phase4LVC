// Rest Parameters: lets you represent an infinite number of arguments as an array
function totalSum(...numbers){
    console.log(numbers);
    let total = 0;
    for(let num of numbers){
        total +=num;
    }
    console.log('The total sum is '+total);
}

totalSum(10,20,30);
totalSum(10,20,30,40,50,60);