// const getMyData=()=>{
//     console.log("Your data being fetched");
// }

// const throttle =(fn,delay)=>{

//     let flag = true;
//     return function(){
//         if(flag){
//             flag=false
//             fn()
//         }
//         setTimeout(()=>{
//             flag=true
//         },delay)
//     }

// }

// const makeAPICall = throttle(getMyData,4000)


const getMyData = () => {
  console.log("Your data being fetched");
};

const throttle = (fn, delay) => {
  let flag = true;
  return function () {
      let context = this;
      let args = arguments;
    if (flag) {
      flag = false;
      fn.apply(context,arguments);
    }
    setTimeout(() => {
      flag = true;
    }, delay);
  };
};

const makeAPICall = throttle(getMyData, 4000);