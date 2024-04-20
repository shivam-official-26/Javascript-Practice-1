/*Sum of Squares*/
/*Write a JavaScript function that takes an array of numbers and returns the sum of the squares of
those numbers, using reduce .*/

const arr = [1,2,3,4];

const ans= arr.reduce(function(acc,element) {
    return acc+=element*element;
},0)
console.log(ans);   // 1*1+2*2+3*3 = 1+4+9 = 14