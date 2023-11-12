const arr = [10,23,54,9,3]

//sum
const sum = arr.reduce((a,b)=>(a+b),0)
console.log(sum)


//Function piping
//using reduce we can create function piping or function composition
const getReverse=(arr)=>{
    return arr.reverse()
}
const spitInArray=(str)=>{
    return str.split('')
}
const getLowerCase=(str)=>{
    return str.toLowerCase()
}
const combine=(arr)=>{
    return arr.join('')
}
console.log(combine(getReverse(spitInArray(getLowerCase('AnuraG')))))
const string = 'AnuraG'
const inOrder = [getLowerCase,spitInArray,getReverse,combine]
const output = inOrder.reduce((out,initFunc)=>initFunc(out),string)
console.log(output);


//segerate values
const marks = [1.1,2.3,1.3,2.5,1.4,3.2,5.3]

const segeratedMarks = marks.reduce((acc,init)=>{
    const floored = Math.floor(init)
    if (!acc[floored]) {
        acc[floored] = []
    }
    acc[floored].push(init)
    return acc
},{})

console.log(segeratedMarks)

//run promises in sync
// helper function to create a promise
// that resolves after a certain time
const asyncTask = function(i) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(`Completing ${i}`), 100*i)
    });
  }
  
  // create an array of task
  const promises = [
    asyncTask(3),
    asyncTask(1),
    asyncTask(7),
    asyncTask(2),
    asyncTask(5),
  ];
  
  // manin function to run promise in series
  const asyncSeriesExecuter = function(promises) {
    promises.reduce((acc, curr) => {
      // return when previous promise is resolved
      return acc.then(() => {
        // run the current promise
        return curr.then(val => {console.log(val)});
      });
    }, Promise.resolve());
  };
  
asyncSeriesExecuter(promises);
  