//how can you can a Function run at the end of the script after everything has executed
// -> using setTimeout() we can make the operation as asynchronous. Due to this the function will be attached a timer and kept aside to execute after the entire script is executed.
console.log("Start");

function heavyFunction(){
    console.log("Heavy Computing function" )
}
setTimeout(heavyFunction, 0);
console.log("End");