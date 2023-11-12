function selectionSort(array){
    let min;
    for (let i = 0; i < array.length; i++) {
        min = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j]<=array[min]) {
                min = j
            }
        }
        let temp = array[i]
        array[i] = array[min]
        array[min] = temp
    }
}

const arr=[64,22,51,69,11,27,42]
selectionSort(arr)
console.log(arr)
//O(nXn)