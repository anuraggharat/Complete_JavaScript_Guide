//create a map like method for an array from Scratch
const array = [1,2,3,4,5,6]
const getDouble = (x) => x * 2;

Array.prototype.myMap = function(operation){
    let output = [];
    for (let index = 0; index < this.length; index++) {
        output.push(operation(this[index]));
    }
    return output;
}

console.log(array.myMap(getDouble));

//triple
console.log(array.myMap((x)=>x*3));
