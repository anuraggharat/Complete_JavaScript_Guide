console.log(this)
const a =10;
function myfunc(){
    var a =10;
    console.log(this);
}
myfunc()

const b ={
    name:"anurag",
    print(){
        console.log(this); //{ name: 'anurag', print: [Function: print] }
        function anotherPrint(){
            console.log(this); // undefined
        }
        anotherPrint()
    }
}
b.print()

console.log(this); // Refers to the global object (window in a browser)

function myFunction() {
  console.log(this); // Refers to the global object (window in a browser)
}

const myObject = {
  prop: "value",
  method: function() {
    console.log(this); // Refers to the myObject
  }
};

myFunction();

myObject.method();

const arrowFunction = () => {
  console.log(this); // Retains the value of `this` from the outer context
};

arrowFunction();
