const speechMixin = {
    mixinname:"speech mixin",
    sayName(){
        console.log(`My name is ${this.name}`);
    }
}

const walkMixin = {
    walk(){
        console.log(`${this.name} is walking`)
    }
}

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    } 
}

class User extends Person{
    constructor(username,name,age){
        super(name,age)
        this.username=username;

    }
}

const user = new User("anuraggharat","anurag",24) 
Object.assign(User.prototype,speechMixin)
//the object.assign method is used to create a new object
// Object.assign(target, source)
user.sayName() //my name is anurag
console.log(user.mixinname); //speech mixin

//can have multiple mixins 
Object.assign(User.prototype,walkMixin)
user.walk() //anurag is walking
