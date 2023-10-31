function fetchData(...args){
  console.log("fetching data",args[0],args[1]);
}

//one way of implementation
const debounce = (fn, delay) => {
  let id;
  let fncontext = this;
  return function (...args) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      fn.call(fncontext,...args);
    }, delay);
  };
};

document.getElementById("button").addEventListener("click",debounce(()=>fetchData("1","2"),2000));
document.getElementById("button1").addEventListener("click",()=>simpleDebounce(getmedata));
document.getElementById("button2").addEventListener("click",()=>simpleDebounce(getmedata));
document.getElementById("button3").addEventListener("click",()=>simpleDebounce(getmedata));
document.getElementById("button4").addEventListener("click",()=>simpleDebounce(getmedata));








//simple implementation
function getmedata(){
    console.log("Data being fetched")
}

let id

function simpleDebounce(fn){
    if(id){
        clearInterval(id)
    }
    id = setTimeout(()=>{
        fn()
    },1000)
}