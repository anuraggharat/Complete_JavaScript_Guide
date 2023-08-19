const fruits = [
    {
        apple:4,
        grapes:10
    },
    {
        mango:10,
        pineapple:20
    },
    {
        strawberry:12,
        jackfruit:1,
        pineapple:1,
        apple:5
    },
    {
        grapes:5,
        orange:8,
        pineapple:4
    },
    {
        apple:1,
        mango:9
    }
] 
//using loops
const output = {}
for (var i of fruits) {
    for (const key in i) {
        if (output[key]){
            output[key] =output[key] + i[key] 
        }else{
            output[key]  = i[key]
        }  
    }
}
console.log(output)


//using reduce
const output2 = fruits.reduce((acc,curr)=>{
    for (let key in curr) {
        if (acc[key]){
            acc[key] = curr[key] + acc[key]
        }
        else{
            acc[key] = curr[key]
        }
    }
    return acc;
},{})

console.log(output2);


