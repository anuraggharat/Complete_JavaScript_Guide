const getMyData = () => {
  console.log("Your data being fetched");
};

const throttle = (fn, delay) => {
  let flag = true;
   return function() {
      let context = this;
      let args = arguments;
    if (flag) {
      flag = false;
      fn.apply(context,args);
    }
    setTimeout(() => {
      flag = true;
    }, delay);
  };
};

const throttle2 = (fn,delay)=>{
  let lastTime = 0;
  return function(...args){
    let now = new Date().getTime();
    console.log(...args)
    let context = this
    if ( now - lastTime <= delay) {
        return 
    }
    fn.call(context,...args)
    lastTime = now
  }
}
let btn = document.getElementById('throttle')
btn.addEventListener('click',throttle(getMyData,5000))