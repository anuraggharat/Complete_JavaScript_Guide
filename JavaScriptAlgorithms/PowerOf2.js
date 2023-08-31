//O(logn)
function powerOf2(n){
    if (n<1) {
        return "False"
    }
    while (n>1) {
        if (n%2 !== 0) {
            return "False"
        }
        n = n/2
    }
    return "True"
}

//O(1)
function powerOf2Bitwise(n){
    if (n<1) {
        return "False"
    }
    return (n & (n-1)) === 0
}


console.log(powerOf2Bitwise(10))
console.log(powerOf2Bitwise(64))
console.log(powerOf2Bitwise(21))
