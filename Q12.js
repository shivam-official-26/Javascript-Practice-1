const person = [
    {
      name: 'Jim',
      color: 'blue',
      age: 22,
    },
    {
      name: 'Sam',
      color: 'blue',
      age: 33,
    },
    {
      name: 'Eddie',
      color: 'green',
      age: 77,
    },
  ]

// Accepts the array and key
const groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      ;(result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue,
      )
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result
    }, {}) // empty object is the initial value for result object
  }
  
  // Group by color as key to the person array
  const personGroupedByColor = groupBy(person, 'color')
  console.log(personGroupedByColor);