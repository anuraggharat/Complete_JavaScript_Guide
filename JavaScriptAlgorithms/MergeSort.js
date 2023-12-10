function divide(arr){
    if (arr.length<2) {
        return arr;
    }
    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)
    return merge(divide(leftArr),divide(rightArr))
}

function merge(leftArr,rightArr){
    let temp = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            temp.push(leftArr.shift())
        }else{
            temp.push(rightArr.shift())
        }
    }
    return [...temp,...leftArr,...rightArr]
}

const arr = [10,4,7,1,2,8,5]
console.log(divide(arr).toString())