/*
The following code is intended to log each number multiplied by 2, but it’s not working as
expected. Identify and fix the issue.
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
num *= 2;
});
console.log(numbers);
*/

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
  numbers[index] = num *= 2;
});
console.log(numbers);
