const square = (n) =>{
    return n*n;
}
const cube = (n) =>{
    return n*n*n;
}
//decorator functions
const logger=(fn)=>{
    console.log(`Called at ${Date.now()}`);
    return fn;
}
console.log(logger(square)(2))

const checkParams=(fn)=>{
    return function(...params){
        if (params.length !== fn.length) {
            throw new Error(`Length of Parameters should be ${fn.length}`)
        }
        if (!Number.isInteger(params[0])) {
            throw new Error("Parametes should be of Integer type")
        }
        return fn(...params)
    }
}

let s = logger(square)
let c = logger(cube)
console.log(s(4))
console.log(c(4))

let decoratedSquare = checkParams(square)
console.log(decoratedSquare(3))


let requestData = async (url) =>{
    try {
        const response = await fetch(url)
        const data = response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}


let monitorRequests = (fn) =>{
    return async function(url){
        console.time('fn')
        const data = await fn(url)
        console.timeEnd('fn')
        return data
    }
}


async function gatherData(){
    let decoratedFunction = monitorRequests(requestData)
    const data = await decoratedFunction('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data);
}
gatherData()