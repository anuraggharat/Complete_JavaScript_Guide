// We cannot use a import statement outside a module, to use import we have to use old syntax of require.
//we have declared this as module in package.json file, hence now we can use the import keyword. 

//normal imports
import { getPort, userObj, st } from "./Data.js";
//importing default
import printData from './Data.js'

//renaming named import
import {  country as cntry} from "./Data.js";
//renaming default import
import logData from './Data.js'



getPort()
console.log(cntry);
printData()
logData()
console.log(st);
console.log(userObj.age);



//This is older syntax of using a require. Since we defined this as an module we can do regular imports
//const User = require('./User')
//const newUser = new User("anurag", "anurag@gmail.com");
//newUser.getInfo();
//import User from './User.js'
