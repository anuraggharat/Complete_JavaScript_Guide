document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent");
  },
  false
);
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent");
  },
  false
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child");
  },
  false
);

//Event Trickling and Event Capturing

// document.querySelector("#grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("grandparent");
//   },
//   true
// );
// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("parent");
//   },
//   true
// );
// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("child");
//   },
//   true
// );
