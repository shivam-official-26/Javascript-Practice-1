// normal map
// const arr = [1,2,3,4,5];
// const result=arr.map(function(element){
//     return element*2;
// })
// console.log(result
// );

/********* */

// custom map

/* Queation ====== Implement a custom function customMap that mimics the behavior of the JavaScript
Array.prototype.map method. It should not use the built-in map method and should work as
expected when tested with an array.*/

function customMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

const final = customMap(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  (element) => element * 2
);
console.log(final);
