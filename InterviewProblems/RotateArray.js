//Rotate the array from the given index

const arr = [2,3,4,5,7]
function rotate(r,arr){
    for (let i = 0; i < r; i++) {
       let a = arr.pop()
       arr.unshift(a)
    }
    return arr
}

console.log(rotate(3,arr))