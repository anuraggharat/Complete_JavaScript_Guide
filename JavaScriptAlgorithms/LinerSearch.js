function LinearSearch(arr,t) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === t) {
            return true
        }
    }
    return false
}

console.log(LinearSearch([1,2,3,4,5],3))
console.log(LinearSearch([1,2,3,4,5],31))
