console.log(this)

let obj = {
    name:"Anurag",
    getMyName(){
        console.log(this)
    }
}

obj.getMyName()