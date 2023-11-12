const arr =[1,2,3,4,5,6]


//Finding Square of all values in Array using Map
console.log(arr.map(i=>i*i))

//finding all the numbers which are even or divisible by two
console.log(arr.filter(i => i%2 == 0))
console.log(arr.filter(isOdd));

function isOdd(x){
    return x%2==1;
}




//Reduce

//Reduce takes in two parametes Accumulator(acc) and Current(cur)
//Acc is also called as the first or previous value hence in 
//reduce the mapping starts from second element because in second 
//element acc is first element and curr is second
//Acc is initialized at the first element [0]
console.log(arr.reduce((acc, cur) => {
        console.log("Runs")
    return (acc = acc + cur);
}));

console.log(
  arr.reduce((acc, cur) => {
    console.log("Runs");
    return (acc = acc + cur);
  },0));


//find the sum
//console.log(arr.reduce((acc, cur) => (acc = acc + cur)));
//find Max value
//console.log(arr.reduce((acc, cur) => (cur > acc ? acc = cur : null)));




const users = [
  { fn: "Anurag", age: 22 },
  { fn: "Aniruddha", age: 17 },
  { fn: "Aradhana", age: 50 },
  { fn: "Aravind", age: 56 }
];

const output = users.reduce((acc,curr)=>{
    if (curr.age>20){

        acc=[...acc,curr.fn]

    }
    return acc
},[])

console.log(output)