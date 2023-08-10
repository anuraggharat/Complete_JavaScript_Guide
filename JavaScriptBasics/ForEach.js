// for each is an array method and not a loop

const arr = [10,20,30,40,50]

arr.forEach(i=>console.log(i*i))


const obj = {
    name:"Anurag",
    age:24,
    role:"SDE"
}

// for each cannot be used on object
obj.forEach(i=>console.log(i))