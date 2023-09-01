function factorial(n){
    let output = 1;
    for (let i = 1; i <= n; i++) {
        output = output * i;
    }
    return output;
}

function factorialRec(n){
    if (n<=2) {
        return n
    }
    return n * factorialRec(n-1)
}

console.log(factorial(4))
console.log(factorialRec(4))
