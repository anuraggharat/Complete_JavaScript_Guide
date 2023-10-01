async function fetchData(){
    console.log("Function Start");
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await res.json()
    console.log(data.value);
    console.log("Function End");
}

console.log("Begin")
fetchData()
console.log("End");