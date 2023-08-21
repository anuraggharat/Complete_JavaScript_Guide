function print(){
    console.log("Print");
    if(true) clearInterval(printer)
}

//const printer = setInterval(print,2000)
const watch = document.getElementById('watch')
const text = document.getElementById('text')

let count = 10
function countDown(){
    count--
    if (count==0) {
        clearInterval(timer)
        text.innerHTML="Boom!!!"
    }else{
        watch.innerHTML = count
    }
}

const timer = setInterval(countDown,1000)