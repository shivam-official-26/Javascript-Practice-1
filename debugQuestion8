/*The following recursive reduce function is intended to flatten an array of arrays into a single array,
but it contains errors. Identify and fix them:
function flattenArray(arr) {
return arr.reduce((acc, val) => {
if (Array.isArray(val)) {
acc.concat(flattenArray(val));
} else {
acc.push(val);
}
return acc;
}, []);
}
*/

function flattenArray(arr) {
    return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
    acc = acc.concat(flattenArray(val));
    } else {
    acc.push(val);
    }
    return acc;
    }, []);
    }