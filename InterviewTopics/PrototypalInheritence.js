const user ={
    name:"Anurag",
    email:"anuraggharat55@gmail.com",
    sayHello(){
        console.log("Hello World!")
    }
}

const developer = {
    role:"Front End Developer"
}

console.log(developer.__proto__)

developer.__proto__ = user

console.log(developer.sayHello())