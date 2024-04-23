/*  Write a function that takes an array of objects with nested objects and transforms each nested
object’s key-value pairs into arrays of [key, value] . Use map and reduce . */

function transformNestedObjects(arr) {
    // Use map to iterate over each object in the array
    return arr.map(obj => {
        // Use Object.entries to get an array of [key, value] pairs for each object
        return Object.entries(obj).map(([key, value]) => {
            // Check if the value is an object (and not null)
            if (typeof value === 'object' && value !== null) {
                // If the value is an object, recursively transform it into [key, value] arrays
                const nestedTransformed = transformNestedObjects([value]); // Recursively transform nested object
                return [key, nestedTransformed[0]]; // Return [key, transformed nested object]
            } else {
                // If the value is not an object, directly return [key, value]
                return [key, value];
            }
        });
    });
}

// Example usage:
const data = [
    { id: 1, name: 'John', address: { city: 'New York', country: 'USA' } },
    { id: 2, name: 'Alice', address: { city: 'London', country: 'UK' } },
    { id: 3, name: 'Bob', address: { city: 'Paris', country: 'France' } }
];

const transformedData = transformNestedObjects(data);
console.log(transformedData);
