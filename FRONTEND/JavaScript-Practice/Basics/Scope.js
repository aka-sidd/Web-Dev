//Scope Define where a variable is accessible in your code. There are two types of scope: global and local. Global scope means the variable is accessible anywhere in your code, while local scope means the variable is only accessible within a specific function or block of code.
//1) Global Scope: A variable declared outside of any function or block has global scope. It can be accessed from anywhere in the code.
let name = "Siddharth";
function greet(){
    console.log(name); // Output: Siddharth
}
greet();
console.log(name); // Output: Siddharth

//Function Scope: A variable declared within a function has local scope. It can only be accessed within that function.
function greetUser(){
    let userName = "Siddharth";
    console.log(userName); // Output: Siddharth
}
greetUser();
//console.log(userName); // This will throw an error because userName is not defined outside the function

//Bonus: Shadowing — Same name, different scope
let shadow = "Global";
function shadowFunction(){
    let shadow = "Local";
    console.log(shadow); // Output: Local
}
shadowFunction();
console.log(shadow); // Output: Global

