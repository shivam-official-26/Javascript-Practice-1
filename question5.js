/*Filtering and Accumulating

Using filter and reduce , write a function that takes an array of objects with properties name
and value and returns the sum of the values of objects whose name property starts with the letter
‘a’ or ‘A’.

*/
/*
const arr = [
  { name: "apple", value: 5 },
  { name: "Grapes", value: 6 },
  { name: "aeroplane", value: 10 },
  { name: "popat", value: 14 },
  { name: "Aatmaram", value: 10 },
];

let result = arr
  .filter(function (obj) {
    if (obj.name.split("")[0] === "a" || obj.name.split("")[0] === "A") {
      return true;
    } else return false;
  })
  .reduce(function (acc, el) {
    return (acc += el.value);
  }, 0);

console.log(result);
*/

/******Alternate solution */

function sumValuesStartingWithA(arr) {

    const filteredArray = arr.filter(obj => obj.name.startsWith("A")||obj.name.startsWith("a"));

    return filteredArray.reduce(function (acc, el) {
       return (acc += el.value); 
    },0)

}

const answer = sumValuesStartingWithA([
  { name: "Apple", value: 50 },
  { name: "Grapes", value: 60 },
  { name: "aeroplane", value: 100 },
  { name: "popat", value: 144 },
  { name: "Aatmaram", value: 100 },
]);

console.log(answer);

