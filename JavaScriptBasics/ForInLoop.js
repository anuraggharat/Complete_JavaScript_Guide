const arr = [10,20,30,40,50,60]

for (var key in arr) {
    console.log(arr[key] * arr[key])
}

// here key is the index and not the value 

// for in loop can also be used to iterate over an object
const obj = {
    name:"Anurag",
    age:24,
    role:"SDE"
}

for (var key in obj){
    console.log(`key is ${key} and value is ${obj[key]}`);
} 