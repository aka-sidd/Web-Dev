// JavaScript Array Data Structure
//
// An array stores multiple values in one ordered collection.
// JavaScript arrays use zero-based indexes: the first item is at index 0.
//
//     index:    0          1             2             3
//              +----------+-------------+-------------+----------+
//     value:   | "HTML"   | "CSS"       | "JavaScript" | "Python" |
//              +----------+-------------+-------------+----------+
//     length:  4  (last index is length - 1)
//
// Reading and changing values:
const languages = ["HTML", "CSS", "JavaScript", "Python"];
console.log(languages[0]); // HTML - read the first value
languages[1] = "CSS3"; // update the value at index 1
console.log(languages); // ["HTML", "CSS3", "JavaScript", "Python"]

// An unused position has the value undefined, but length includes that position.
languages[5] = "SQL";
console.log(languages[4]); // undefined
console.log(languages.length); // 6

// array 

const myArr = [0,1,2,3,4,5];
// console.log(myArr[0]);
// console.log(myArr[2]);
// console.log(myArr[3]);
const myheroes = ["Shaktimaan","IndianArmy"];
const myArr2 = new Array(1,2,3,4);
// console.log(myheroes[0]);

// Array methods
//for add the element we use "push() methods"
//myArr.push() // apppend the value at the end of the array
//for remove the element:// using pop() method
//myArr.push(6);
//console.log(myArr);
//myArr.pop(); //remove the last element at the end of the array
//unshift:- shift the first element and place first position
//myArr.unshift(9); // shift the first element and place first position
//console.log(myArr);
//shift()method to remove the unshift element from array
//myArr.shift();
//console.log(myArr);
//includes:- questionner type methods mainly used for this method is this element present in array or not
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// join()methods:-> Adds all the elements of an array into a string 
// const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof newArr);

//slice, splice

// console.log("A",myArr);
// const myn1 = myArr.slice(1,3);
// console.log(myn1);
// console.log("B",myArr);
// const myn2 = myArr.splice(1,3);
// console.log(myn1);
// console.log(myn2);


//Length Property(V.Important)
let arr = [1,2,3];
console.log(arr.length); // 3 
console.log(typeof arr);
arr.length = 1;
console.log(arr); //[1]
//It truncates the array
arr.length = 5;
console.log(arr); //It extends with empty slots

// let arr2  = ["a","b","c"];
// console.log(arr2[0]); // a 
// console.log(arr2["0"]); // a

// let Arr = [];
// Arr[0] = "A";
// Arr[5] = "F";
// console.log(Arr);

const marvel_heroes = ["thor","ironman","spiderman"];
const dc = ["superman","flash","batman"];

marvel_heroes.push(dc);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc);
// console.log(allHeroes);

// const all_new_Heroes = [...marvel_heroes,...dc];
// console.log(all_new_Heroes);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Siddharth"));
console.log(Array.from("Siddharth"));
console.log(Array.from({name: "Siddharth"}))

let score1  = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

// Again Revise Concepts properly...
// Instead of creating separate variables for five students, you can write:
const students = ["Rahul", "Aman", "Priya", "Siddharth", "Neha"];

// Imagine an array as a row of boxes.
// Each box stores one value and has an index.
//
//  +----------------+----------------+----------------+----------------+----------------+
//  |    Index 0     |    Index 1     |    Index 2     |    Index 3     |    Index 4     |
//  |                |                |                |                |                |
//  |     Rahul      |      Aman      |      Priya     |    Siddharth    |      Neha      |
//  +----------------+----------------+----------------+----------------+----------------+
//
// students[0] is "Rahul", and students[4] is "Neha".

// Without an array, I might store their names separately
let student1 = "Rahul";
let student2 = "Aman";
let student3 = "Priya";
let student4 = "Siddharth";
let student5 = "Neha";
// A few important words:
// - Array: A collection of values.
// - Element: One value inside an array.
// - Index: The position used to access an element.
// - Length: The number of elements in an array.
// In JavaScript, array indexing starts at 0, not 1.
// - Element: One value inside an array.
// - Index: The position used to access an element.
// - Length: The number of elements in an array.
// In JavaScript, array indexing starts at 0, not 1.
const fruit = ["Apple", "Banana", "Mango", "Orange"];

// Index	Value
// 0	   Apple
// 1	   Banana
// 2	   Mango
// 3	   Orange

// The first element is at index 0, the second at index 1, and so on.

// Access an element
console.log(fruit[0]); // Apple
console.log(fruit[1]); // Banana
console.log(fruit[2]); // Mango
console.log(fruit[3]); // Orange

// If i want to access an index that doesn't exist, it will return undefined.
console.log(fruit[10]); // undefined

// JavaScript returns undefined because there is no element at index 10.
//Remember this rule: For a non-empty array, the last element's index is array.length - 1.
// For example, an array with 4 elements has indexes 0, 1, 2, and 3.

// Find the length of an array
// Use the .length property.
const fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.length);

const numbers = [10, 20, 30, 40, 50];

console.log(numbers.length);    // 5
console.log(numbers[0]);        // 10
console.log(numbers[numbers.length - 1]); // 50

// Modify an array element
// I can change an element by assigning a new value to its index.

// const fruits = ["Apple", "Banana", "Mango"];

// fruits[1] = "Grapes";

// console.log(fruits); ---->> Output: ["Apple", "Grapes", "Mango"]

// Add an element to an array
// I can add a new element by assigning a value to the next available index.

// Why does this work even though we used const?
// Because const prevents reassignment of the variable itself, but it does not prevent changes to the contents of an array.
// This is allowed:
const number = [1, 2, 3];
number[0] = 100;

console.log(number); // [100, 2, 3]

// Some Operations
// 1. Add an element to the end of an array
const numbers1 = [1, 2, 3];
numbers1.push(4); // Adds 4 to the end of the array
console.log(numbers1); // [1, 2, 3, 4]

// 2. Remove the last element from an array
const numbers2 = [1, 2, 3, 4];
numbers2.pop(); // Removes the last element (4)
console.log(numbers2); // [1, 2, 3]

// 3. Add an element to the beginning of an array
const numbers3  = [1,2,3];
numbers3.unshift(0); // Adds 0 to the beginning of the array
console.log(numbers3); // [0, 1, 2, 3]

// 4. Remove the first element from an array
const numbers4 = [0,1,2,3];
numbers4.shift(); // Removes the first element (0)
console.log(numbers4); // [1, 2, 3]

// 5. Find the index of an element in an array
const numbers5 = [10, 20, 30, 40, 50];
console.log(numbers5.indexOf(30)); // 2 (the index of 30 in the array)
console.log(numbers5.indexOf(100)); // -1 (100 is not in the array)

// Loop through an array
for(let i = 0;i<numbers5.length;i++) {
    console.log(numbers5[i]); // Logs each element in the array
}

//Let's understand the loop:
// - let i = 0 — start at the first index.
// - i < numbers.length — continue while the index is less than 5.
// - i++ — move to the next index.
// - numbers[i] — retrieve the value at the current index.

//Why use < instead of <=?
// Because the valid indexes are 0 through 4. If you use i <= numbers.length, the loop will also try to access index 5, which doesn't exist.

// An easier way: for...of
//If I only need the values and not the indexes, you can write:
for(const number of numbers5) {
    console.log(number);
}

// Some Questions
//1) Access ArrayElements: Given this array print the first , the third element and the last element of the array.
const myArray = [10,20,30,40,50];
console.log(myArray[0]); // 10
console.log(myArray[2]); // 30
console.log(myArray[myArray.length - 1]); // 50

// Find the sum of all elements in an array: Given this array find the sum of all the elements in the array.
const SumArray = [1,2,3,4,5];
let sum = 0;
for(let i = 0;i<SumArray.length;i++){
    sum+= SumArray[i];
}
console.log(sum); // 15

// Find the largest element in an array: Given this array find the largest element in the array.
const largestArray = [10,20,30,40,50];
let largest = largestArray[0];
for(let i = 1; i<largestArray.length;i++){
    if(largestArray[i] > largest){
        largest = largestArray[i];
    }
}
console.log(largest); // 50

// Count Even number
const evenArray = [1,2,3,4,5,6,7,8,9,10];
let evenCount = 0;
for(let i=0;i<evenArray.length;i++){
    if(evenArray[i] % 2 === 0){
        evenCount++;
    } 
}
console.log(evenCount); // 5

// Reverse an array: Given this array reverse the elements of the array.
const reverseArray = [1,2,3,4,5];
const reversed = [];
for(let i = reverseArray.length - 1; i >= 0; i--){
    reversed.push(reverseArray[i]);
}
console.log(reversed); // [5, 4, 3, 2, 1]
//We start from the last index and move backwards. Each element is added to the new array.

// Search for an element
const searchArray = [10,20,30,40,50];
function searchElement(arr,target) {
    let found = false;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            found = true;
            break;
        }}
    if(found){
        console.log(target + " is found in the array.");
    }else{
        console.log(target + " is not found in the array.");
    }
}

searchElement(searchArray,30); // 30 is found in the array.
searchElement(searchArray,60); // 60 is not found in the array.

// Second largest distinct number
const distinctArray = [10,20,30,40,50];
function secondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let i=0;i<arr.length;i++) {
        if(arr[i]>largest) {
            secondLargest = largest;
            largest = arr[i];
        }else if(arr[i]>secondLargest && arr[i]!==largest) {
            secondLargest = arr[i];
        }
    }
    console.log(secondLargest);
}
secondLargest(distinctArray); // 40
