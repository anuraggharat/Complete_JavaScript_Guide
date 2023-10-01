function x(){
    var a = 7;
    function y(){
        console.log(a)
    }   
    return y
}
var z = x();
console.log(z)
z()

//partially applied functions
//const f = () => {}
const curriedMultiply = x => y => x*y;
const times10 = curriedMultiply(10)
console.log(times10(5));
console.log(times10(7));
console.log(times10(8));
