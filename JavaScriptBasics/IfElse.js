const s = 5;
//if (s%2==0) console.log("Even")
//else console.log("Odd")

if (s%2===0) {
    console.log("Even")
}else if(s==0){ 
    console.log("0")
}else{
    console.log("Odd")
}

//using ternary operator
s%2===0 ? console.log("Even") : console.log("Odd")
