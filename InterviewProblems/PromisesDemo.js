// const getData = () => {
//     setTimeout(function(){
//         return [1,2,3,4,5]
//     },3000)
// }
console.log("Initial");
function getData(){
    const promise = new Promise((resolve,reject)=>{
        try {
            setTimeout(function(){
                resolve([1,2,3,4,5])
            },3000)
        } catch (error) {
            reject("Something went wrong")
        }
    }) 
    return promise
}
getData().then((res)=>console.log(res)).catch(error=>console.log(error));
//console.log(res);
async function allData(){
const response = await getData()
console.log(response)
}
//allData()
console.log("End")