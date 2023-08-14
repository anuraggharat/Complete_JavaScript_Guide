function getSquare(number){
    return number**2;
}

console.log(getSquare(4))

function myFunc(l,...rest){
    console.log(l)
    console.log(rest)
    console.log(arguments)
}

myFunc(5,1,2,3,4)


function One(a){
    console.log("Inside One")
    a()
}

function Two(){
    console.log("Inside Two");
}

One(Two)

function fetchData(url, callback) {
    // Simulate an asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
      const data = "Fetched data from " + url;
      callback(data); // Call the callback function with the fetched data
    }, 1000);
  }
  
  function processFetchedData(data) {
    console.log("Processing data:", data);
  }
  
  fetchData("https://example.com/api/data", processFetchedData);
  