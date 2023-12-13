Array.prototype.myFlat = function (level) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && level > 0) {
      output = [...output, ...this[i].myFlat(level - 1)];
    } else {
      output.push(this[i]);
    }
  }
  return output;
};
const arr = [1, [2, 3], [5, 6, 7], 4, [10, 11, [12, 14]]];
console.log(arr.myFlat(2));
