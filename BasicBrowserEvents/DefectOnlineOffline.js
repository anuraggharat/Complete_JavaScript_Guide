console.log("Detect if Browser is connected to internet or not!")

window.addEventListener('online',()=>{
    console.log("You are online")
})

window.addEventListener("offline", () => {
  console.log("You are offline");
});