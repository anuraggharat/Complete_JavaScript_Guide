function logUser1(name,time,device){
    console.log(`User ${name} has logged in`);
    console.log(`User ${name} has logged in with device ${device} at ${time}`)
}
logUser1('Anurag','10AM','Samsung Note')
logUser1('Virat')


function logUser2(name){
    console.log(`User ${name} has logged in`);

    return function(time){
        return function(device){
        console.log(`User ${name} has logged in with device ${device} at ${time}`)
        }
    }
}
logUser2("Anurag")("10AM")("Apple 13")
logUser2("Virat")

//function composition using Currying
const add = function(a){
    return function(b){
        return a + b
    }
}
const multiply = function(a){
    return function(b){
        return a * b
    }
}
console.log(add(10)(20))
console.log(multiply(10)(20))
const addThenDouble = multiply(add(5)(4))(2)
console.log(addThenDouble)