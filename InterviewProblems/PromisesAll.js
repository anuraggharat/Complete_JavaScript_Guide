const myPromisesAll = (promises) => {

    const result = []
    return new Promise((resolve,reject)=>{
        promises.forEach((element,index )=> {
            element
            .then(e=>{
                result.push(e)
                if(index === promises.length-1) resolve(result)
            })
            .catch(error=>reject(error))
        });
    })


}

function fetchData(){
    return new Promise((resolve, reject)=>{
        let data = 'Anurag'
        setTimeout(()=>{
            resolve(data)
        },2000)
})
}

Promise.all([
    fetchData(),
    Promise.resolve("Resolved"),
    Promise.reject("rejected")
]).then(val=>console.log(val)).catch(err=>console.log(err));

console.log("--------");

myPromisesAll([
    fetchData(),
    Promise.resolve("Resolved"),
    Promise.resolve("rejected")
]).then(val=>console.log(val)).catch(err=>console.log(err));

