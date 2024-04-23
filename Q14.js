/*The following code is supposed to create an object that counts the occurrences of each string in an
array, but it has errors. Fix the code:
const strings = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = strings.reduce((acc, str) => {
acc[str] = acc[str] ? acc[str]++ : 1;
return acc;
}, {});
console.log(count);*/

const strings = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = strings.reduce((acc, str) => {
    if (acc[str]) {
        // If it exists, increment the count for that string
        acc[str] += 1;
    } else {
        // If it doesn't exist, initialize the count for that string to 1
        acc[str] = 1;
    }
return acc;
}, {});
console.log(count);