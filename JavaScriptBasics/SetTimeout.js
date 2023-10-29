console.log("Start")

setTimeout(()=>{
    console.log("Set Timeout Finished");
},5000)


let startTime = new Date().getTime()
let currentTime = startTime;
//this is make the main thread busy for 10s. By that time the duration 
//of setTimeout() 
//will be finished but still it wont run because callstack is not empty.
while (currentTime < startTime + 10000) {
    currentTime = new Date().getTime()
}
console.log("End");
