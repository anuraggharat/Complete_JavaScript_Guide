//write a function to check if arrays are equal

const jsonEquals = (a,b) => JSON.stringify(a) === JSON.stringify(b)

function equals(a,b){
    const aS = a.sort()
    const bS = b.sort()
    return aS.every((e,i)=>e===bS[i])
}
const arr1 = [1,2,3]
const arr2 = [3,2,1]
console.log(equals(arr1,arr2)) 
console.log(jsonEquals(arr1,arr2)) 
