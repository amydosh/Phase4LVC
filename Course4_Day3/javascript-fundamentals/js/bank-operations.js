// Inside the bank, you will have multiple users (an array) --> bank database
let accounts = [
    {accNo: 100001, name: "Andie Mydosh", balance: 3920343.32},
    {accNo: 100002, name: "Joe Mydosh", balance: 2342345.32},
    {accNo: 100003, name: "Kyla Mydosh", balance: 12335.32},
    {accNo: 100004, name: "Kade Mydosh", balance: 23432.32},
    {accNo: 100005, name: "Julie Gifford", balance: 12634786.32}
];

console.log(accounts);

// 1. Find account by user name
function findAccount(accNo){
    for(let acc of accounts){
        if(acc.accNo==accNo){
            return acc;
        }
    }
    // return null;
    return "The account was not found";
}
var response = findAccount(100004);
console.log(response);
console.log(response.name);

// 2. Show user balance (you can use the findAccount function above to reuse the code)
function showBalance(accNo){
    let accObj = findAccount(accNo);
    if(accObj!=null){
        console.log(`Hello ${accObj.name}! Your account number is: ${accObj.accNo}. Your balance is ${accObj.balance}`);
    }else{
        console.error("Account does not exist with accNo: "+accNo);
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