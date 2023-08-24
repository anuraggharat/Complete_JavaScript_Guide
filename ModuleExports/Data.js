//Named Export
export const PORT = 1000;

//Named Function Export
export function getPort(){
    console.log(PORT)
}

//Named Object Export
export const userObj = {
    name:"Anurag Gharat",
    age:24,
    city:"Mumbai"
}

//Multiple Export
const country = "India";
const state = "Maharashtra";
export {country,state as st}

//default export (Only 1 allowed per file)
export default function printData(){
    console.log("Printing the data from default export")
}
