// class Car{
//     constructor(name,brand,speed,price){
//         this.name=name;
//         this.brand=brand;
//         this.speed=speed;
//         this.price=price;
//     }
//     getTopSpeed(){
//         return this.speed
//     }
//     getPrice(){
//         return this.price
//     }
// }


// const car1 = new Car("Q8","Audi",300,10000000)
// console.log(car1.getTopSpeed())
// console.log(car1.getPrice())



function Car(name,brand,speed,price){
    this.name=name;
    this.brand=brand;
    this.speed=speed;
    this.price=price;
}

Car.prototype.getTopSpeed = function(){
    return this.speed
}

const car2 = new Car("X5","BMW",200,8000000)
console.log(
car2.getTopSpeed()
);



class User {
    constructor(name,email,skills,_accessCode="default"){
        console.log("Inside Constructor");
        this.name=name
        this.email=email
        this.skills=skills
        this._accesscode = _accessCode
    }



    #passsword = "";
    static department = "Admin"
    
    //private variabale must always be set using setter
    setPassword(p){
        this.#passsword = p
    }
    getPassword(){
        return this.#passsword
    }
    
    get accessCode(){
        return this._accesscode
    }
    
    get getName(){
        console.log("Getter called")
        return this.name
    }
    
    set setName(n){
        console.log("Seter called")
        this.name=n
    }
    //static method
    static isEmailValid(e){
        const arr = e.split('')
        console.log(arr)
        if(arr.includes("@")){
             console.log("Valid")
        }else{
             console.log("Invalid")
        }
    }
    static {
        console.log("Static Block")
    }
    static get department(){
        return "Computer Science"
    }
    static set department(d){
        return this.creator = d
    }

    login(){
        console.log("User logged in");
    }
}


const user1 = new User("Anurag","anurag@gmail.com",["JS","CS","HTML"])
//cannot do this
//console.log(user1.#password)
user1.setPassword("password")
console.log(user1.getPassword());
user1.setName = "Anurag Gharat"
console.log(user1.getName);
User.isEmailValid("a@gmail.com")
//not acessible for instance
//user1.isEmailValid("agmail.com")
console.log(User.creator);

console.log(User.department)
User.department = "finance"
console.log(User.department)

//derived class
class Admin extends User{
    constructor(name,email,skills,sector){
        super(name,email,skills)
        this.sector=sector
    }
    login(){
        console.log("Admin Logged in");
    }
}

const admin = new Admin("Tony","tonyadmin.com",["a","b"],"Security")
console.log(admin)
admin.setPassword("admin@123")
console.log(admin.getPassword());
Admin.isEmailValid(admin.email)
user1.login()
admin.login()
console.log(user1.accessCode)
console.log(admin.accessCode)


//read only fields
const newUser = new User("Steve","steve@avengers.com",["java","python"])
console.log(newUser.accessCode)
newUser.accessCode = "Not read only"
console.log(newUser.accessCode)

