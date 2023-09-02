function cartesianProduct(array1,array2){
    let output = []
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            output.push([array1[i],array2[j]])            
        }
    }
    return output;
}
//O(mXn)
console.log(cartesianProduct([1,2],[3,4]))