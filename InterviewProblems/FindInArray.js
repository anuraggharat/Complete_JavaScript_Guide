// find an object in array

const array = [
    {
        a:1,
        b:2
    },
    {
        a:2,
        b:3
    },
    {
        a:5,
        b:6
    },
    {
        a:10,
        b:20
    }
]
//to check if object are equal to
function objectEquals(p,q){
    return Object.keys(p).every(i=>p[i]===q[i])
}
//iterate over the array and find if object are equal to each other
function findInArray(array,target){
    return array.some(element => objectEquals(element,target));
}


console.log(findInArray(array,{a:5,b:6}))
//true
console.log(findInArray(array,{a:7,b:6}))
//false