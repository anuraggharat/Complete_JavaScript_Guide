const arr = [34,35,31,38,42,31,35]
const expectedOutput = [1,2,1,1,0,1,0]
let output = []
let j;

for (let i = 0; i < arr.length; i++) {
    let d = false;
    for (j = i + 1; j < arr.length; j++) {  
        //inner loop to find next highest temperature  
        if (arr[j]>arr[i]) {
            d=true; 
            break;
        }
    }
    output.push(d ? j-i:0)
}

console.log(output.toString())