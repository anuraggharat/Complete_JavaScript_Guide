// open in browser how closures are created
function layerOne(){
    const one = 10;
    return function layerTwo(){
        const two = 20;
        return function layerThree(){
            const three = 30;
            return one + two + three;
        }
    }
}

const one = layerOne();
const two = one();
const three = two();
console.log(three)