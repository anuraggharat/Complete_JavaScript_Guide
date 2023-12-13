//polyfill for arr.filter

function getDouble(x) {
  return x * 2;
}

Array.prototype.myMap = function (fn) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(fn(this[i]));
  }
  return output;
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.myMap(getDouble));
console.log(arr.myMap((i) => i * 3));
