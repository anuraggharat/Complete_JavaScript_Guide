function add(a,b){
    return a+b;
}
console.log(add(2,3))

function curriedAdd(a){
    return function(b){
        return a+b;
    }
}
const returnedFunction = curriedAdd(10)
console.log(returnedFunction(20));
console.log(curriedAdd(20)(40))