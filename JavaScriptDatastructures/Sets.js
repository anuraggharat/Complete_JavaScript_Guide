const arr = [11,45,33,21,11,45,88,99,99]
const s = new Set(arr)
console.log(s)
console.log(s.values());

s.delete(45)
console.log(s.values());
s.clear()
console.log(s.values());
