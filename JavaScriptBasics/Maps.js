const map = new Map()

map.set(1,"One")
map.set('1',"String One")
let user = {name:'Anurag'}
map.set(user,"02091230123")

console.log(map);
console.log(map.get(1));

console.log(map.keys());
console.log(map.values());
console.log(map.entries());

map.forEach((value,key,map)=>console.log(value,key,map))

const map2 = new Map([
    ['mango',250],
    ['apple',150],
    ['pineapple',200]
])
console.log(map2.get('mango'));

//create an object from map
const obj = Object.fromEntries(map2.entries())
console.log(obj);


//Weakmap
const weakmap = new WeakMap()
weakmap.set(user,121312323)
user = null
console.log(weakmap.has(user));
console.log(map.keys());
