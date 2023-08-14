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
    constructor(name,email,skills){
        this.name=name
        this.email=email
        this.skills=skills
    }
    #passsword = "";
    //private variabale must always be set using setter
    set setPassword(p){
        this.#passsword = p
    }
    get getPassword(){
        return this.#passsword
    }
}

const user1 = new User("Anurag","anurag@gmail.com",["JS","CS","HTML"])
//cannot do this
//console.log(user1.#password)
user1.setPassword="password"
console.log(user1.getPassword);