/*What is the output of the following code snippet? Explain the process.
const data = [1, '2', 3, '4', 5];
const result = data
.map(item => parseInt(item))
.filter(item => !isNaN(item))
.reduce((acc, item) => acc + item, 0);
console.log(result);*/

const data = [1, '2', 3, '4', 5];
const result = data
.map(item => parseInt(item)) // [1,2,3,4,5]
.filter(item => !isNaN(item))   // [1,2,3,4,5]
.reduce((acc, item) => acc + item, 0);  // 1+2+3+4+5 = 15
console.log(result);    // 15