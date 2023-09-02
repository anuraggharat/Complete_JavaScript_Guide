const arr = [10,4,7,1,2,8,5]

function insertionSort(array){
    for (let i = 1; i < array.length; i++) {
        let numberToInsert = array[i]
        let j = i - 1 
        while (j >= 0 && array[j]>numberToInsert) {
            array[j+1] = array[j]
            j=j-1;
        }
        array[j+1] = numberToInsert
    }
}

insertionSort(arr)