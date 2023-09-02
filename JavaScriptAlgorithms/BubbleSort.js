const arr = [10,4,7,1,2,8,5]

function BubbleSortOne(arr){
    let flag 
    do {
        flag = false
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp;
                flag = true
            }
        }    
    } while (flag);
    
}

function BubbleSortTwo(arr){
    let flag;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1 - i; j++) {
            flag = false;
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                flag = true;
            }
        }
        if (flag === false) {
            break;
        }
    }
}

BubbleSortTwo(arr)
console.log(arr.toString())