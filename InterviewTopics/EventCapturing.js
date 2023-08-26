document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent");
  },
  true
);
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent");
  },
  true
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child");
  },
  true
);
