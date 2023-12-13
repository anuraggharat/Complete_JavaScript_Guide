//polyfill for arr.filter

function getEven(ele) {
  return ele % 2 === 0;
}

Array.prototype.myFilter = function (fn) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) output.push(this[i]);
  }
  return output;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr.myFilter((item) => item % 3 === 0));//3,6
console.log(arr.myFilter(getEven));
//2468
