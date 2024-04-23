/*What does the following code output?
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
if (index % 2 === 0) sum += num;
});
console.log(sum);*/


let sum = 0;
const numbers = [1, 2, 3, 4, 5];
//  index is     0  1  2  3  4
numbers.forEach((num, index) => {
if (index % 2 === 0) sum += num;    // sum = 1+3+5=9 (sum of even indices)
});
console.log(sum);