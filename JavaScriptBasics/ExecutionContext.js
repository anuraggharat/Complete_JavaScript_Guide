//check in browser with help of debugger of how execution context is created.
function printOne(){
    console.log("One - Before call");
    printTwo()
    console.log("One - After call")
}
function printTwo(){
    console.log("Two - Before call");
    printThree()
    console.log("Two - After call");
}
function printThree(){
    console.log("Three - Before call");
    printFour()
    console.log("Three - After call")
}
function printFour(){
    console.log("Four - Return back");
}
printOne()