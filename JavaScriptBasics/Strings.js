// A String object in JavaScipt represents a string of characters


let str ="Anurag"
let completeStr ='Anurag Aravind Gharat'

//get the length 
console.log(str.length)

//get character at index
console.log(str.charAt(1))

//Attach string at the end
console.log(str.concat("Dev"))

//Checks if the string ends with the given char
console.log(str.endsWith("g"))

//Checkes if the 's' is present
console.log(str.includes("s"))

//Get index of 'n'
console.log(str.indexOf("n"));

//Checks last occurance of 'a'
console.log(str.lastIndexOf("a"));

//add * at the end till the length of string reaches 10
console.log(str.padEnd(10, "*"));

//add # at the start till the length of string reaches 10
console.log(str.padStart(10,"#"));

//Repeats the string and add at the end
console.log(str.repeat(2));

//Replaces the substring with given string
console.log(str.replace("Anu","annu"));

//Finds the character in the string
console.log(str.search("r"));

//slices the string between given indexes
console.log(str.slice(2,5));

//Splits the string into array
console.log(str.split(""));
console.log(completeStr.split(" "));


//Convert string to Lower case
console.log(str.toLowerCase());

//Convert String to Upper case
console.log(str.toUpperCase());

//Trim the whitespaces around the string
console.log(str.trim());