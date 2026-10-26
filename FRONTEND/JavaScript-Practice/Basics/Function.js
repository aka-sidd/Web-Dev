function greet(){
    console.log("Hello, World!");
}
greet();
//another function
function add(a,b){
    return a+b;

}
console.log(add(5,10));
console.log(add(20,30));

// Function with Parameters
function greetUser(name){
    console.log("Hello, " + name + "!");
}
greetUser("Alice");
greetUser("Bob");
greetUser("Charlie");

// Function with Return Value
function addNumbers(num1,num2){
    return num1 + num2;
}
let result = addNumbers(15,25);
console.log("The sum is: " + result);

function multiplyNumbers(num1,num2){
    return num1 *num2;
}
let product = multiplyNumbers(5,10);
console.log("The product is: " + product);

//Understand between console.log and return
function addAndLog(num1,num2){
    console.log(num1 + num2);
}
let result1 = addAndLog(10,20); // This will log 30 but result1 will be undefined
console.log("Result1 is: " + result1); // Output: Result1 is: undefined
// A function without an explicit returned value produces undefined.
function addAndReturn(num1,num2){
    return num1 + num2;
}
let result2 = addAndReturn(10,20); // This will return 30
console.log("Result2 is: " + result2); // Output: Result2 is: 30

// Calculate a Square
function calculateSquare(num){
    return num *num;
}
let square = calculateSquare(5);
console.log("The square is: " + square);
console.log(calculateSquare(10)); // Directly logging the return value of the function
console.log(calculateSquare(15)); // Directly logging the return value of the function
//We created one reusable function and used it for three different numbers.

// Practice Questions
//1) Create a function sayHello() that prints "Hello World!"
function sayHello(){
    console.log("Hello World!");
}
sayHello();
//2) Create a function isEven(num) that takes a number as an argument and returns true if the number is even, and false if it's odd.
function isEven(num){
    if(num%2 == 0) {
        return true;
    } else {
        return false;
    }
    let number = 4;
    if(isEven(number)){
        console.log(number + " is even.");
    } else {
        console.log(number + " is odd.");
    }
}
// Create a function max(a,b) that returns the larger of two numbers
function findMax(a,b){
    if(a > b){
        return a;
    }  else{
        return b;

    }
}
console.log(findMax(10,20)); // Output: 20
console.log(findMax(30,15));
console.log(findMax(5,5)); // Output: 5

// Create a function factorial(n) that returns the factorial of a number
function factorial(n) {
    if (n==0 || n==1) {
        return 1;
    }else {
        return n *factorial(n-1);
    }
    console.log(factorial(5)); // Output: 120
    console.log(factorial(0)); // Output: 1
    console.log(factorial(1)); // Output: 1
    console.log(factorial(6)); // Output: 720
    console.log(factorial(7)); // Output: 5040
}

// find factorial using for loop
function factorialLoop(n) {
    let result = 1;
    for(let i=2;i<=n;i++){
        result *= i;
    }
    return result;
}
console.log(factorialLoop(5)); // Output: 120
console.log(factorialLoop(0)); // Output: 1
console.log(factorialLoop(1)); // Output: 1
console.log(factorialLoop(6)); // Output: 720
console.log(factorialLoop(7)); // Output: 5040
