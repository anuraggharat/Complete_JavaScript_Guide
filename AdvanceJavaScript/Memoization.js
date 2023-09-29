// function heavyCalculation(n){
//     return n**2
// }
const heavyCalculation = memoizedFunction()

console.log(heavyCalculation(10))
console.log(heavyCalculation(4))
console.log(heavyCalculation(10))
console.log(heavyCalculation(50))


function memoizedFunction(){
    const cache = {}

    return function(n){
        console.log(n in cache);
        if(n in cache){
            return cache[n]
        }
        cache[n] = n**2
        return cache[n]
    }
}