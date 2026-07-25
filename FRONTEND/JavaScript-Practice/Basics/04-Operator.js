//Operator
//arithmetic operator
console.log(10 + 5); //addition
console.log(10 - 5); //subtraction
console.log(10 * 5); //multiplication
console.log(10 / 5); //division
console.log(10 % 5);   //modulus

console.log(10 ** 5);  //exponential
console.log(10**3); //exponential


// Assignment operator
//let x = 20;
//let y = 10;
//x = x+y; 
//console.log(x);
//x-=y;
//console.log(x);

//Comparison Operatiors
/*
let a = 20;
let b = 10;
console.log(a<b);
console.log(a>b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);
console.log(a===b);
console.log(a!==b);
*/

//let z = "10";
//let c = Number(z);
//console.log(c);

// let x = 20;
// let y = "20";
// console.log(x==y); 
// console.log(x===y); //strict equality operator

//let a = "121ac";
//let b = Number(a);
//console.log(b); //NaN --> Not a Number
//console.log(0/0); //NaN
//console.log(typeof b); // number

//let a = 10;
//let b = String(a);
//console.log(b); // String 
//console.log(typeof b); // string

// let z = true;
// console.log(Number(true)); // 1
// // true number me 1 me convert hogya..and false number me 0 me convert hota hai
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN

// console.log(String(true)); // true
// console.log(String(false)); // false
// console.log(String(null)); // null
// console.log(String(undefined)); // undefined
// console.log(Boolean(10)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean("Siddharth")); // true
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false

//Another Challenge
// let a = 0.1;
// let b = 0.2;
// let c = a+b;
// console.log(c);

//Rule based 
// null is loosely equal to undefined but not strictly equal
//console.log(null == undefined); // true
//console.log(null === undefined); // false
//console.log(null == 0); // false
//console.log(null == ""); // false
//console.log(null == false); // false
//console.log(null == true); // false
//console.log(null>=0); // true
//console.log(null>0); // false
//console.log(null<=0); // true


//Loop 
// for loop
// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// for(let i = 10;i>=0;i--){
//     console.log(i);
// }

//While loop
// let i = 0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// do-while loop
let j =0;
do{
    console.log(j);
    j++;

}while(j<=10);

// If else statement

let age = 25;
if(age>=18){
    console.log("You are eligible for voting");
}else{
    console.log("You are not eligible for voting");
}

// kid,young, old
let ages = 20;
if(ages<18){
    console.log("You are a kid");
}else if(ages>=60){
    console.log("You are old");
}else{
    console.log("You are young");
}

// Logical Operators
// || && 
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

let x = "";
let y = "Mohit";
let z = x&& y;
console.log(z); // false because x is empty string which is falsy value

// OR
let a = 10;
let b = 20;
console.log(a||b); // 10 because a is truthy value so it will return a

// !=
console.log(10!=20); // true
console.log(10!=10); // false