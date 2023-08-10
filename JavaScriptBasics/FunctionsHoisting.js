getMyName() //will work
//getMySurname() //will not work, since its hoisted as undefined
//getMyFullName() //will not work, since its hoisted as undefined


//function declaration
function getMyName(){
    console.log("Anurag")
}

//function expression
var getMySurname = function(){
    console.log("Gharat")
}

//arrow functions
var getMyFullName = () =>{
    console.log("Anurag Gharat")
} 
getMyName() //Anurag
getMySurname() //Gharat
getMyFullName() //Anurag Gharat
