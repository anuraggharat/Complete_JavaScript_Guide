//sum(1)(2)(3)...n = sum of 1-n


function sum(a){
    return function(b){
        if (b) {
            return sum(a+b)
        }else{
            return a
        }
    }
}

const sum = a => b => b ? sum(a+b) : a

console.log(sum(1)(2)(3)(4)(5)())