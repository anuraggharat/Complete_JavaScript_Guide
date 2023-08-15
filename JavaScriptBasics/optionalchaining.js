const obj={
    name:"anurag",
    mymethod(){
        console.log("Hello");
    }
}

//console.log(obj.address.street) //error

//using optional chaining
console.log(obj?.address?.street) //undefined

//also works with functions
obj?.mymethod() //hello
obj.mymethod2?.() //undefined


//multiple ways - using &&
console.log(obj.address && obj.address.street)

//using ternary operator
console.log(obj.address ? user.address.street ? obj.address.street : undefined : undefined)

