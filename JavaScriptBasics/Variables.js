//hoisting
//console.log(a)
//console.log(b)

var a = 10;

let b = 11;


function print(){
    var a = 20
    console.log(a)
}
//console.log(a)
//print()

var x = 10;
//for (var x = 0; x < 5; x++) {
    //console.log(x);
//}
function getX(){
    console.log(x);
    x = 55
    console.log(x);
}
//console.log(x)
//getX()




//block scoped vs function scoped
var p = 1;
if(false){
    // p references the same variable from outer scope
    console.log(p);
    //reassignment - here p is refering to the same variable from outer scope
    var p = 2;
    console.log(p);
    //we change value of p
    p = 3
    console.log(p);
}
//value change is affected
//console.log(p);

//in the below example we get two different copies of q
var q = 11
function getQ() {
    console.log(q); //undefined
    var q = 12; //new variable q whose new scope is function
    console.log(q); //12
    q++;
}
console.log(q); //11
getQ()
console.log(q); //11

//here since we didnt declare a specific variable in function GetR we are actually refering the r present in global scope
var r = 21
function getR() {
    console.log(r); //12
    r++;
}
console.log(r); //11
getR()
console.log(r); //11


//since let and const are block scoped, variable s here is different from each other.
let s = 100;
if (true) {
    let s = 101;
    console.log(s);
}
console.log(s);