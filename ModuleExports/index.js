// We cannot use a import statement outside a module, to use import we have to use old syntax of require.

//const User= require('./User')
const newUser = new User("anurag", "anurag@gmail.com");

newUser.getInfo();



//we have declared this as module in package.json file, hence now we can use the import keyword. 
import User from './User.js'


//normal imports
import { PORT, getPort, userObj, country, state } from "./Data.js";
//importing default
import printData from './Data.js'


printData()

console.log(PORT);
console.log(userObj.age);
getPort();
console.log(country);
console.log(state);
