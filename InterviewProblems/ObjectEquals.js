//write a function to check if two object are equal


function equals(a,b){
    //handle the string/array valyes
    if (a === b) return true

    //check if length of objects is same
    else if(Object.keys(a).length !== Object.keys(b).length) return false

    //check if they are empty or not a type of ject
    else if(!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return false
    
    //after all the check, now we only can have objects, so iterate over it and call the function recursively
    const keys = Object.keys(a)
    return keys.every(e=>equals(a[e],b[e]))
}


const x = {
    name: 'Anurag',
    address: { city: 'Mumbai', country: 'India' },
    skills: [ 'HTML', 'CSS' ],
    role: 'Frontend Developer'
}
const y = {
    name: 'Anurag',
    address: { city: 'Mumbai', country: 'India' },
    skills: [ 'HTML', 'CSS'],
    role: 'Frontend Developer'
}
console.log(equals(x,y))