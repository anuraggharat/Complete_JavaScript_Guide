console.log("Start")
//fetch method returns a promise
const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')
 

var i = 0
//fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json()).then(res=>console.log("res",res)).then(res=>i++)
//console.log("i",i)




function getPost(){
    const promise = new Promise((resolve,reject)=>{
        const res = fetch('https://jsonplaceholder.typicode.com/posts/1')
        if (res) {
            const err = new Error("Cannot complete request")
            reject(err)
        }
        else{
            resolve(res)
        }
    })

    return promise
}

let post = getPost()
//console.log(post);
post.then(res=>res.json()).then(res=>console.log(res)).catch((err)=>console.log(err)).finally(()=>console.log("done"))

