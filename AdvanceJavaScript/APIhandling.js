var text = document.getElementById('joke')
var btn = document.getElementById('btn')
//btn.addEventListener('click',getMeAJoke)
btn.addEventListener('click',getMeJokeAsync)


function getMeAJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res=>res.json())
    .then(res=>{
        text.innerHTML=res.value
    })
    .catch((err)=>(console.log(err)))
    .finally(()=>console.log("resolved"))
}


console.log("Here");
getMeJokeAsync()
async function getMeJokeAsync(){
    try {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await res.json()
    console.log("Inside Try");
    text.innerHTML=data.value
    } catch (error) {
        console.log(error)
    }

}

console.log("End");