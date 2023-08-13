//if duplicates are present in array return true


//method 1 using two for loops
function methodOne(arr){
    for(let i =0; i < arr.length; i++){
        for (let j=i+1;j < arr.length; j++){
            if (arr[i] === arr[j] ) {
                return true;
            }
        }
    }
    return false
}

//method 2 using object
function methodTwo(arr){
    let obj = {}
    for (let i = 0; i < arr.length ; i++){
        if (obj[arr[i]]) {
            return true
        }else{
            obj[i] = 1
        }
    }
    return false
}

//method 3 using set
function methodThree(arr){
    let s = new Set(arr)
    if (arr.length !== s.size) {
        return true
    }else{
        return false
    }
}


const array1 = [1,5,3,4,8,1,5,6,8,2]
const array2 = [1,5,3,4]

console.log(methodOne(array1))
console.log(methodTwo(array1))
console.log(methodThree(array1))
console.log(methodOne(array2))
console.log(methodTwo(array2))
console.log(methodThree(array2))