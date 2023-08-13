const arr = [34,35,31,38,42,31,35]
const expectedOutput = [1,2,1,1,0,1,0]
let output=""

for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {    
        let flag = false;

        if (j>i) {
            flag=true;
           break;
        }
        output = output + "0"
    }

}

console.log(output)