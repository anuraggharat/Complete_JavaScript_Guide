//polyfill for arr.filter

function getSum(acc, curr) {
  return acc + curr;
}

Array.prototype.myReduce = function (fn, init = 0) {
  let sum = init;
  for (let i = 0; i < this.length; i++) {
    sum = getSum(sum, this[i]);
  }
  return sum;
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.myReduce(getSum));
console.log(arr.myReduce((acc, curr) => acc + curr));
