let obj = {};

obj.name = "Prashant";
obj.age = 24;

//Add properties and Methods inside the prototype.
obj.prototype.age = 23;
obj.prototype.getDetails = function(){return `${this.name} is ${this.age} years old`};

console.log(obj.getDetails());
//"Prashant is 24 years old"

//Remove age
delete obj.age;

console.log(obj.getDetails());
//"Prashant is 23 years old"
