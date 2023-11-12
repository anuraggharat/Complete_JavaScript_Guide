//console.log(getSquare(10)); // cannot access before initialization (hosited to undefined)
const getSquare = (s) => s*s

console.log(getSquare(10)); // 100

const arr =[0,1,2,3,4,5,6,7,8,9]

const squares = arr.map((i)=>i*i)
console.log(squares);

const even = arr.filter(i=>i%2===0)
console.log(even);

const total = arr.reduce((a,b)=>a+b)
console.log(total);

const myObj = {
    name:'Anurag',
    getName(){
        console.log('Inside normal function',this)
        const inside = () => {
            console.log('Inside Arrow function',this)
        }
    inside()
    },
    outside: () => {
        console.log('Outside normal function',this)
    }
}
myObj.getName()
myObj.outside()