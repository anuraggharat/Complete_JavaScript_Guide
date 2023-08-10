// let user ={
//     fname:"Anurag",
//     lname:"Gharat"
// }

// let printName = function(ht,di){
//     console.log(this.fname + " " + this.lname,ht,di)
// }
// let callmyname=printName.bind(user,"Alibag")
// callmyname("Raigad")



// Function.prototype.mybind=function (...args){
//     //this refers to the function that calls mybind method so this ->printName
//     console.log(this)
//     let obj = this
//     let params = args.slice(1)
//     return function(...args2){
//         obj.apply(args[0],[...params,...args2]);
//     }
// }

// let callmyname2 = printName.mybind(user,"Alibag")
// callmyname2("Raigad")


const user = {
    name:"Anurag",
    age:22
}

function printMyName(...args){
    console.log(this.name + " " + this.age + " " + args)
}

printMyName.call(user)
printMyName.call(user,"Alibag");
printMyName.apply(user);
printMyName.apply(user,["Alibag"]);

const sayMyName1 = printMyName.bind(user)
sayMyName1()

const sayMyName2 = printMyName.bind(user,"Alibag");
sayMyName2()

// Our Own implementation

Function.prototype.myBind=function (user,...args){

    let Fncontext = this
    //this corresponds who calls this method
    return function(...fnargs){
        Fncontext.apply(user,[...args,...fnargs])
    }

}


const printFromMyBind = printMyName.myBind(user,"Alibag","Raigad")
printFromMyBind("Maharashtra")