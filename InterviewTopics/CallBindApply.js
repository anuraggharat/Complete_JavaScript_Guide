// let myname ={
//     firstname :"Anurag",
//     lastname :"Gharat",
//     printFullName:function(){
//         console.log(this.firstname + " " + this.lastname)
//     }
// }

// myname.printFullName()


// let yourname ={ 
//     firstname:"Sakshi",
//     lastname:"Patil"
// }

// myname.printFullName.call(yourname);


let user = {
  name: "Anurag",
  username: "anu",
};

function saymyname(x) {
  console.log(x + " " + this.name + " " + this.username);
}

saymyname.call(user, "Hello");



function saymyname(x) {
  console.log(x + " " + this.name + " " + this.username);
}

saymyname.apply(user,[ "Hello"]);


let printmyname =saymyname.bind(user,"Hi!")
printmyname()