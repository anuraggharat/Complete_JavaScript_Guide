function fibonacci(x){
    let output = [0,1];
    for (let i = 2; i < x; i++) {
        output.push(output[i-2] + output[i-1])
    }
    return output;
}
//O(n)
//recursion
function fibonacciRec(n){
    if (n < 2) {
        return n
    }
    return fibonacciRec(n-1) + fibonacciRec(n-2)    
}

function generateSeq(end){
    const output = []
    for (let i = 0; i < end; i++) {
        output.push(fibonacciRec(i))
    }
    console.log(output.toString());
}
//O(2**n)

console.log(fibonacci(3))
console.log(fibonacci(10))
console.log(fibonacciRec(4))


