var a = 1;
let b = 2;
const c = 3;
var d = 4;
let e = 5;
const f = 6;

function printOne(){
    var a = 11;
    console.log(a)
    console.log(d)
}
function printTwo(){
    var b = 12;
    console.log(b)
    console.log(e)
}
function printThree(){
    var c = 13;
    console.log(c)
    console.log(f)
}
printOne()
printTwo()
printThree()