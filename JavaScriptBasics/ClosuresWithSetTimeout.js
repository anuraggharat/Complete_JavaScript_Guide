//Here a refers a sepcific variale in memory space. Hence it prints the value that is 
//present at that memory space
for(var a = 0; a < 5; a++){
    setTimeout(function(){
        console.log(a)
    },1000)
}
//prints 5,5,5,5,5

//since let is block scoped we get a new assignment of let everytime we attach the a to the timeout function.
//Hence at every iteration we are refering a new a variable
for(let a = 0; a < 5; a++){
    setTimeout(function(){
        console.log(a)
    },1000)
}
//prints 0,1,2,3,4

//since var is function scoped, we are creating new var copies of a
for(var a = 0; a < 5; a++){
    function print(a){
        setTimeout(function(){
            console.log(a)
        },1000)
    }
    print(a)
}
//prints 0,1,2,3,4,

