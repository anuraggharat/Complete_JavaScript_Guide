function getSquare(number){
    return number**2;
}

console.log(getSquare(4))

function myFunc(l,...rest){
    console.log(l)
    console.log(rest)
    console.log(arguments)
}

myFunc(5,1,2,3,4)