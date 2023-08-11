const a = 10;
let b;
console.log(a ?? "default") //10
console.log(b ?? "default") //default

const c = 0
console.log(c || "value") //value
console.log(c ?? "value") //0
