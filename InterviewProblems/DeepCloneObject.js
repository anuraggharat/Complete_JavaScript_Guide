//create a function to deep clone an object

function deepClone(obj){
    const clone = {}
    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            clone[key] = [...obj[key]]
        }else if(typeof obj[key] === 'object'){
            clone[key] = deepClone(obj[key])
        }else{
            clone[key]=obj[key]
        }
    }
    return clone
}



const user1 = {
    name:'Anurag',
    address:{
        city:'Mumbai',
        country:'India'
    },
    skills:['HTML','CSS'],
    role:'Frontend Developer'
}

const user2 = deepClone(user1)
user2.name='John'
user2.skills.push('JS')
console.log(user1);
console.log(user2);
