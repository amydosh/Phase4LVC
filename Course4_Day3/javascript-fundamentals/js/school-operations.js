// Inside the school, you will have multiple students (an array) --> student database
let students = [
    {stuId: 100001, name: "Andie Mydosh", age: 15, mathMark:"A", sciMark:"A", attendance:100},
    {stuId: 100002, name: "Joe Mydosh", age: 15, mathMark:"A", sciMark:"B", attendance:95},
    {stuId: 100003, name: "Kyla Mydosh", age: 15, mathMark:"A", sciMark:"A", attendance:97},
    {stuId: 100004, name: "Jane Doe", age: 15, mathMark:"D", sciMark:"F", attendance:40},
    {stuId: 100005, name: "John Doe", age: 15, mathMark:"C", sciMark:"B", attendance:80}
];

console.log(students);

// 1. Find account by user name
function findStudent(stuId){
    for(let stu of students){
        if(stu.stuId==stuId){
            return stu;
        }
    }
    // return null;
    return "The student was not found";
}
var response = findStudent(100004);
console.log(response);
console.log(response.name);

// 2. Show user balance (you can use the findAccount function above to reuse the code)
function showAttendance(stuId){
    let stuObj = findStudent(stuId);
    if(stuObj!=null){
        console.log(`Hello ${stuObj.name}! Your account number is: ${stuObj.stuId}. Your attendance is ${stuObj.attendance}`);
    }else{
        console.error("Account does not exist with accNo: "+stuId);
    }
}
showBalance(100001);

// 3. Deposit money
function deposit(accNo, amount){
    let accObj = findAccount(accNo);
    if(accObj!=null){
        // accObj.balance = accObj.balance + amount;
        accObj.balance += amount;
        console.log(`Hello ${accObj.name}! Your account number is: ${accObj.accNo}. You are depositing ${amount}. Your new balance is ${accObj.balance}`);
    }else{
        console.error("Account does not exist with accNo: "+accNo);
    }
    }
    deposit(100001,12345.43);



// 4. Withdraw money
function withdraw(accNo, amount){
    let accObj = findAccount(accNo);
    if(accObj!=null){
        // accObj.balance = accObj.balance - amount;
        accObj.balance -= amount;
        console.log(`Hello ${accObj.name}! Your account number is: ${accObj.accNo}. You are withdrawing ${amount}. Your new balance is ${accObj.balance}`);
    }else{
        console.error("Account does not exist with accNo: "+accNo);
    }
    }
    deposit(100001,100.43);