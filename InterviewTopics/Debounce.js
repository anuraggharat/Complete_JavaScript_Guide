// document.getElementById("myid").addEventListener("click", () => {
//   console.log("Clicked");
// });

//one way of implementation
const debounce = (fn, delay) => {
  let id;
  return function (...args) {
    if (id) {
      clearTimeout(id);
    }

    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

document.getElementById("myid").addEventListener("click",debounce(e=>{console.log("clicked")},2000));







//simple implementation
let c=0;
function getmedata(){

    console.log("Data being fetched",c++)
    console.log(this.name)

}

let id

function myFunc(){

    if(id){
        clearInterval(id)
    }

    id =setTimeout(()=>{
        getmedata()
    },3000)
}


//intermediate implementation
// const handleDebounce=(fn,d)=>{

//     let timerid;
    
//     return function(){
//         if (timerid) {
//           clearTimeout(timerid);
//         }

        
//         timerid = setTimeout(()=>{
//             fn()
        
//         },d)
//     }

// }

// const searchboxSuggestion = handleDebounce(getmedata,2000)

const handleDebounce = (fn, d) => {
  let timerid;
  return function () {
    if (timerid) {
      clearTimeout(timerid);
    }
 let context = this;

    timerid = setTimeout(() => {
      fn.apply(context,arguments);
    }, d);
  };
};

const searchboxSuggestion = handleDebounce(getmedata, 2000);

