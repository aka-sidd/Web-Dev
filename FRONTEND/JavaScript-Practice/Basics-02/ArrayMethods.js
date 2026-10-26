// there are many array methods in JavaScript. Some of the most commonly used ones are:
// map(), filter(), reduce(), forEach(), find(), some(), every(), includes(), indexOf(), push(), pop(), shift(), unshift(), slice(), splice(), concat(), join(), sort(), reverse().
// map()--> map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// DIAGRAM: map() transforms every item and returns a new array.
//
//   Original array       Transformation        New array
//   [1]  -------------------- * 2 ----------------> [2]
//   [2]  -------------------- * 2 ----------------> [4]
//   [3]  -------------------- * 2 ----------------> [6]
//   [4]  -------------------- * 2 ----------------> [8]
//   [5]  -------------------- * 2 ----------------> [10]
//
//   numbers  [1, 2, 3, 4, 5]
//      |       |       |       |       |
//     *2      *2      *2      *2      *2
//      |       |       |       |       |
//   doubled [2, 4, 6, 8, 10]
//
// map() does not change the original numbers array.
// map() method is used to transform each element of an array and create a new array with the transformed values. In the example above, we used map() to double each number in the original array. The result is a new array containing the doubled values.
const prices = [100,200,300,400,500];
const finalPrices = prices.map(price => price + (price * 1.18));
console.log(finalPrices); // Output: [118, 236, 354, 472, 590]

// The biggest reason between map() and normal forloop is that map() method is more concise and readibility is better.
// With a for loop I must inspect the loop condition, index,array access and push() to understand what it does
// map() is a declarative style, I describe the tranformation I want to perform on each element of the array, and it handles the iteration and creation of the new array for me. This makes the code easier to read and understand, especially for complex transformations.

// filter()--> filter() method creates a new array with all elements that pass the test implemented by the provided function.
const ages = [12, 17, 18, 21, 25, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // Output: [18, 21, 25, 30]

// DIAGRAM: filter() tests every item and keeps only the items that pass.
//
//   Input       Test: age >= 18       Result
//   [12]  ------------ false --------> removed
//   [17]  ------------ false --------> removed
//   [18]  ------------ true ---------> [18]
//   [21]  ------------ true ---------> [21]
//   [25]  ------------ true ---------> [25]
//   [30]  ------------ true ---------> [30]
//
//   ages    [12, 17, 18, 21, 25, 30]
//     |      |   |   |   |   |   |
//   test    no  no  yes yes yes yes
//     |      |   |   |   |   |   |
//   adults                 [18, 21, 25, 30]
//
// filter() returns a new array and can have fewer items than the original.
// filter() method is used to filter elements of an array based on a condition and create a new array with the filtered values. In the example above, we used filter() to get all the ages that are greater than or equal to 18. The result is a new array containing only the adult ages.

const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = evenNumbers.filter(num => num %2 === 0);
console.log(even); // Output: [2, 4, 6, 8, 10]
// filter() express the ideas directly; keep only the elements that satisfy the condition. It is more readable and concise than a for loop, which requires more lines of code to achieve the same result.

const numbers1 = [1, 2, 3, 4, 5];
const result = numbers1.filter(num => num >3);
console.log(result); // Output: [4, 5]

// reduce()--> reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((total, n) => total + n, 0);
console.log(sum); // Output: 15

// DIAGRAM: reduce() combines all items into a single value.
//
//   Starting total = 0
//
//   total  +  current number  =  new total
//     0    +        1         =     1
//     1    +        2         =     3
//     3    +        3         =     6
//     6    +        4         =    10
//    10    +        5         =    15
//
//   numbers2 [1, 2, 3, 4, 5]  ---------------->  sum = 15
//                    reduce()
//
// reduce() returns one final value, unlike map() and filter(),
// which return arrays.

// More methods of JS
//1) forEach()--> forEach() method executes a provided function once for each array element.
//Suppose i have an aray of names and want to print every print..
const names = ['Alice', 'Bob', 'Charlie'];
names.forEach(name => {
    console.log(name);
})
names.forEach(name => console.log(name)); // Output: Alice Bob Charlie

// I could write the same thing using a for loop but forEach() is more concise and readable. It clearly expresses the intent to perform an action for each element in the array without the need for manual indexing or loop control.
for(let i = 0;i<names.length;i++) {
    console.log(names[i]);
}

// Important difference: map() creates a new array of results; forEach() does not.
const nums = [1, 2, 3, 4, 5];
const a = nums.map(n => n *2);
const b = nums.forEach(n => n *2);
console.log(a); // Output: [2, 4, 6, 8, 10]
console.log(b); // Output: undefined
// Returnsundefined because forEach() does not return a new array; it simply executes the provided function for each element in the original array. In contrast, map() returns a new array containing the results of applying the function to each element.

// includes()--> includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const fruits = ['apple', 'banana', 'mango'];
console.log(fruits.includes('banana')); // Output: true
console.log(fruits.includes('grape')); // Output: false

// It checks whether the specified element exists in the array and returns a boolean value. It is a simple and readable way to check for the presence of an element in an array without needing to loop through the array manually.
const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3.includes(3)); // Output: true
console.log(numbers3.includes(6)); // Output: false

// include() returns a Boolean value indicating whether the specified element is present in the array. It is a simple and readable way to check for the presence of an element in an array without needing to loop through the array manually.
