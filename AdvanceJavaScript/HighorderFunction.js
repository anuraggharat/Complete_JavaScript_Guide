// const area = function(r){
//     return Math.PI * r * r;
// }

// const circumference = function(r){
//     return 2*Math.PI*r;
// }

// const diameter = function(r){
//     return 2*r
// }

// const calculate=function(input,operation){
//     const output =[]
//     return operation(input)
// }

// console.log(calculate(10,area))
// console.log(calculate(10, circumference));
// console.log(calculate(10, diameter));

const area = function (r) {
  return Math.PI * r * r;
};

const circumference = function (r) {
  return 2 * Math.PI * r;
};

const diameter = function (r) {
  return 2 * r;
};

const calculate = function (input, operation) {
  const output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(operation(input[i]));
  }
  return output;
};

console.log(calculate([10, 20, 30], area));
console.log(calculate([10, 20, 30], circumference));
console.log(calculate([10, 20, 30], diameter));