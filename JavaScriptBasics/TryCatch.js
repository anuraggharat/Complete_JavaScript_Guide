
try {
    console.log(b)
    console.log("Inside Try block")
} catch (error) {
    console.log(error)
    console.log("Inside Catch block")
}finally{
    console.log("Inside Finally block")
}

//Throw a user defined error
//throw new Error("Error")

throw new Error(19/0);