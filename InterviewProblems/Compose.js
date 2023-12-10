function addFive(n){
    return n+5
}
function multiplyBy10(n){
    return n*10
}
function divideBy2(n){
    return n/2
}
function compose(...arr){
    return function(x){
        return arr.reduceRight((acc,curr)=>{
            return curr(acc)
        },x)
    }   
}

const evaluate = compose(addFive,multiplyBy10,divideBy2)
console.log(evaluate(10))