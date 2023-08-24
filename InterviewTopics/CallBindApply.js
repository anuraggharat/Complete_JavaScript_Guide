let myname ={
    firstname :"Anurag",
    lastname :"Gharat",
    printFullName:function(){
        console.log(this.firstname + " " + this.lastname)
    }
}

myname.printFullName()


let yourname ={ 
    firstname:"Virat",
    lastname:"Kohli"
}

myname.printFullName.call(yourname);


let user = {
  name: "Anurag",
  username: "anu",
};




function saymyname(x) {
  console.log(x + " " + this.name + " " + this.username);
}

saymyname.apply(user,[ "Hello"]);


let printmyname =saymyname.bind(user,"Hi!")
printmyname()


Function.prototype.myBind = function(target,...args){
  
  let ftnContext = this
  return ftnContext.apply(target,...args)
}


let myBindPrint =saymyname.bind(user,"Hi!")
myBindPrint()

