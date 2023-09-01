var arr = [0,3,5,6,8,9]

//binary search using recursion
function BinarySearchRec(arr,t){
    return search(arr,t,0,arr.length-1)
}

function search(arr,target,start,end){
    console.log(start,end);
    if (start > end) {
        return -1
    }
    let mid = Math.floor(start+end/2)
    if (arr[mid] === target) {
        return mid
    }
    if (target > arr[mid]) {
        return search(arr,target,mid+1,end)
    }else {
        return search(arr,target,start,mid-1)        
    }
}
//O(logn)

function BinarySearch(arr,t){
    let start = 0;
    let end = arr.length - 1
    while (start<=end) {
        let mid = Math.floor((start + end)/2)
        if (arr[mid] === t) {
            return mid
        }
        if (t > mid) {
            start = mid + 1
        }
        if (t < mid){
            end = mid - 1
        }
    }
    return -1
}

console.log(BinarySearch(arr,5))
console.log(BinarySearchRec(arr,5))