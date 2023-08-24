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