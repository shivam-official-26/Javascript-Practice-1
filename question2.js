/*Given the following code, identify and fix the issues to make it work as intended. It’s supposed to
filter out all negative numbers and return a new array.
const numbers = [1, -2, 3, -4, 5];
const positives = numbers.filter(n => n < 0);
console.log(positives);*/

const numbers = [1, -2, 3, -4, 5];
const positives = numbers.filter(n => n > 0); // it will > 0 because < 0 will return negative values
console.log(positives);
