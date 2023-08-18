function One(){
    console.log("One");
}
function Two(){
    setTimeout(()=>{
        console.log("Call Back of set timeout");
    },1000)
    console.log("Two");
}
function Three(){
    console.log("Three");
}

One()
Two()
Three()