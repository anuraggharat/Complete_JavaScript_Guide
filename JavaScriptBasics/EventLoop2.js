function One(){
    console.log("One");
}
function Two(){
    setTimeout(()=>{
        console.log("Inside setTimeout()");
    },0)
}
function Three() {
    Promise.resolve().then(()=>console.log("Inside Promise"))
}
function Four() {
    console.log("Four");
}

Three()
One()
Two()
Four()

//Output
//One
//Four
//Inside Promise
//Inside setTimeout()