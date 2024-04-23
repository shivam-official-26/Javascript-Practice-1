/*Analyze and determine the output of the following complex sequence of map , filter , and
reduce :
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
.map(num => num * 2)
.filter(num => num % 3 === 0)
.reduce((acc, num) => acc + num, 0);
console.log(result);*/

const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
.map(num => num * 2)        // [2,4,6,8,10,12]
.filter(num => num % 3 === 0)       //[6,12]
.reduce((acc, num) => acc + num, 0);        // return  6+12=18
console.log(result);