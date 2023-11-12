const arr = [10,4,7,1,2,8,5]

function insertionSort(array){
    for (let i = 1; i < array.length; i++) {
        let numberToInsert = array[i] //start by inserting the [1] element
        let j = i - 1 //pointer at the [0]
        while (j >= 0 && array[j]>numberToInsert) {
            array[j+1] = array[j] //shift the numbers
            j=j-1; //unshift the pointer j
        }
        array[j+1] = numberToInsert //insert the number on correct place
    }
}

insertionSort(arr)