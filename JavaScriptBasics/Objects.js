//using object literals
const user = {
    name:'Anurag',
    id:1,
    type:'Engineer',
    age:24,
    getName: function(){
        console.log(`Name is ${this.name}`)
    }
}
//using new operator
const user2 = new Object()
user2.name="Steve"
user2.age=100
console.log(user2)


//using object constructor
function Car(name,price,seater){
    this.name=name;
    this.price=price;
    this.seater=seater
}

const car1 = new Car("Dodge Challenger","77k",2)
console.log(car1) //Car { name: 'Dodge Challenger', price: '77k', seater: 2 }

//objects can also be created using the Object.create() method
const user3 = Object.create(user)
console.log(user3) //empty
user3.getName() //anurag since user3 is empty
user3.name="Roger"
user3.getName() //roger since we added the name above
console.log(user3)

//delete a noninherited property
user.extra ="Extra"
delete user3.extra


user.getName() //Name is Anurag
console.log(user["id"]) //1
const newUser = user
newUser.age=25
//since both objects refer same location. 
console.log(newUser.age) //25
console.log(user.age) //25
console.log(user === newUser) //true



//creating a clone
//using object.assign() method
//const cloneUser1 = Object.assign({},user)
const cloneUser1 = {};
Object.assign(cloneUser1,user)
//duplcating from multiple objects
//Object.assign(cloneUser1,user,newUser)
console.log(cloneUser1)

//using loop
const cloneUser2 = {}
for (let i in user){
    cloneUser2[i]=user[i];
}
console.log(cloneUser2)

//for deep cloning we use 
const hero = {
    name:"Iron Man",
    age:40,
    group:"Avengers",
    abilities:{
        strength:66,
        iq:99,
        power:75
    }
}


const hero2 = structuredClone(hero)
console.log(hero2.abilities === hero.abilities) //true

const shallowData = {...hero}
shallowData.name = "Super Man"
shallowData.abilities.strength=99
console.log(shallowData.abilities.strength) //99
console.log(hero.abilities.strength) //99

//getters and setters

const myObj = {
    a:10,
    get b(){
        return this.a;
    },
    set c(x){
        this.a = x;
    }
}

console.log(myObj)
console.log(myObj.b)
myObj.c=12
console.log(myObj)
