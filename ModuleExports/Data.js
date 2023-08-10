export const PORT = 1000;


export function getPort(){
    console.log(PORT)
}


export const userObj = {
    name:"Anurag Gharat",
    age:24,
    city:"Mumbai"
}


//default export
export default function printData(){
    console.log("Printing the data from default export")
}


const country = "India";
const state = "Maharashtra";

//instead of adding a export before every declaration, we can export them together
export {country,state}