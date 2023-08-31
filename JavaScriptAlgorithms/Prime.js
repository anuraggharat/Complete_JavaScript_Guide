function isPrime(n){
    if (n < 2) {
        return "Not Prime"
    } 
    for (let i = 0; i < Math.sqrt(n); i++) {
        if (n % 2 === 0) {
            return "Not Prime"
        }
    }
    return "Prime"
}

console.log(isPrime(1));
console.log(isPrime(10));
console.log(isPrime(5));
console.log(isPrime(98741));

