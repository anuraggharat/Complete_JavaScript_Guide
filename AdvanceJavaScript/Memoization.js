const cache = {}
function checkInCache(c){
    if(cache[c]){
        return cache[c]
    }else{
        return false
    }
}


function getSquare(n){
    let result = checkInCache(n)
    if(result){
        console.log(cache)
        return result;
    }else {
        cache[n] = n**2  
        return cache[n]    
    }
    
}

console.log(getSquare(10))
console.log(getSquare(2))
console.log(getSquare(7))
console.log(getSquare(10))


const multiplyBy10=(n)=>{
    return n * 10
}

function memoize(fn){
    const cache = {}
    return function(n){
        if(n in cache){
            console.log(cache);
            return cache[n]
        }
        cache[n] = fn(n)
        return cache[n]
    }
}
const memoizedMultiplyBy10 = memoize(multiplyBy10)
console.log(memoizedMultiplyBy10(10));
console.log(memoizedMultiplyBy10(20));
console.log(memoizedMultiplyBy10(4));
console.log(memoizedMultiplyBy10(10));



 // program to display fibonacci sequence using recursion
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}
const memoizedFibonacci = memoize(fibonacci)

function generateSeq(end){
    const output = []
    for (let i = 0; i < end; i++) {
        output.push(memoizedFibonacci(i))
    }
    console.log(output.toString());
}

//generateSeq(5)
//generateSeq(7)
