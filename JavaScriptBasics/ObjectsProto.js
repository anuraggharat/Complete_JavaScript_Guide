const superUser = {
    name:'Anurag',
    id:1,
    type:'Engineer',
    age:24,
    getName: function(){
        console.log(`Name is ${this.name}`)
    }
}

const user = Object.create(superUser)
//you will get all the keys of superUser due to prototype inheritance.
for (const key in user) {
    console.log(key);
}

user.department = "dev"
//you will get all the keys of superUser and user due to prototype inheritance.
for (const key in user) {
    console.log(key);
}

//only properties of user
console.log(Object.keys(user))

//compare between own property and inherited property
for (const key in user) {
    if (Object.hasOwn(user, key)) {
        console.log(key);
    }
}


//using the proto object we can add new properties or methods to the parent object
const Car = function(brand,name,year){
    this.brand=brand;
    this.name=name;
    this.year=year;
}

const car1 = new Car("tata","nexon",2017)
Object.prototype.getName=function(){
    console.log(`Name of car is ${this.name}`)
}

car1.getName() //Name of car is nexon 

//prototype inheritance or prototype chain

const GrandParent = {
    name:"A",
    printGrandParent:function(){
        console.log("GrandParent is A")
    }
}

const Parent = Object.create(GrandParent)
const Son = Object.create(Parent)
Son.printGrandParent()
console.log(GrandParent.__proto__)

const developer = {
    role:"Front end developer"
}
//__proto__ points towards the Prototype object
console.log(developer.__proto__)
//since there is no Prototype inheritance in this case, it will be empty
console.log(developer.__proto__.__proto__)

developer.__proto__ = superUser
developer.getName()
console.log(developer.__proto__.__proto__) // Will point towards the superUser Prototype Object