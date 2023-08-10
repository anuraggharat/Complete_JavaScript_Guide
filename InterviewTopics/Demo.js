const prods = [
    {
        id:1,
        name:'Nike Air force'
    },
    {
        id:2,
        name:'Nike Air Jordan'
    },
    {
        id:3,
        name:'New balance 327'
    }
]
let state = {}

prods.map(prod=>{
    state[prod.id] = prod
})


const myObj =    {
        id:1,
        name:'Nike Air force'
    }

console.log(prods[1])

console.log(state)