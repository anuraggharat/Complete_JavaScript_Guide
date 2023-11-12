function partition(arr,left,right){
    let i = left;
    let j = right;
    let pivot = arr[Math.floor((left+right)/2)];
    while (i<=j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i<=j) {
            let temp = arr[i];
            arr[i] = arr[j]
            arr[j] = temp;
            i++;
            j--;
        }
    }
    return i;
}

function QuickSort(arr,left,right){
    let index;
    if (arr.length > 1) {
        index = partition(arr,left,right)
            if(left < index - 1){
                QuickSort(arr,left,index - 1)
            }
            if (index < right) {
                QuickSort(arr, index, right)
            }
    }
    return arr;
}

console.log(QuickSort([10,4,1,5,2],0,4))