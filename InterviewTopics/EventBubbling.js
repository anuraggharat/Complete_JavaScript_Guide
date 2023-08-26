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
    (e) => {
        console.log("child");
        //this will stop propagating the event furter
        e.stopPropagation()
    },
    false
);
   