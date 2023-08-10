const arr = [1,2,3,4,5,6]

function getSquare(n){
    return n*n;
}

for(var i = 0;i<arr.length;i++){
    console.log(getSquare(arr[i]))
}