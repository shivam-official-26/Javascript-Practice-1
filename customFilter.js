// Custom Filter

function custonFilter(arr,callback){
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }

    if (typeof callback !== 'function') {
        throw new Error('Second argument must be a function');
    }
    const answer = [];
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i])) answer.push(arr[i]); 
        }
        return answer;
}


const answer = custonFilter([1,2,3,4,5,8,16,17,14],(el)=>el%2===0);
console.log(answer);