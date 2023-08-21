async function returnData1(){
    return "data";
}
function returnData2(){
    return "data"
}
const pr = Promise.resolve("Hello")
pr.then((i)=>console.log(i))
const data1 = returnData1()
console.log(data1);
data1.then((res)=>console.log(res))
const data2 = returnData2()
console.log(data2);


