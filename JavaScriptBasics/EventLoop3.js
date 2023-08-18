const arr=[1,2,3]
function One(){
    console.log("One");
}
function Two(){
    setTimeout(()=>{
        console.log("Inside setTimeout()");
    },50)
}
function Three() {
    Promise.resolve().then(()=>console.log("Inside Promise"))
}
function Four() {
    console.log("Four");
}
function Five() {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(()=>console.log("Inside Fetch"))
}
function Six(){
arr.map(()=>(
    console.log("Map")
))
}

One()
Two()
Three()
Four()
Five()
Six()
//Output
//One
//Four
//Inside Promise
//Inside setTimeout()