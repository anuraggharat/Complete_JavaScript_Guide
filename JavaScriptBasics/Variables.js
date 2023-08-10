//hoisting
console.log(a)
console.log(b)

var a = 10;

let b = 11;


function print(){
    var a = 20
    console.log(a)
}
console.log(a)
print()

