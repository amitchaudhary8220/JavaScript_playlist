document.querySelector("#grand").addEventListener("click", () => {
    console.log("grand is clicked");
},true)
document.querySelector("#parent").addEventListener("click", (e) => {
    console.log("parent is clicked");
    // e.stopPropagation();
},false)
document.querySelector("#child").addEventListener("click", () => {
    console.log("child is clicked");
},false)



//event capturing and event bubbling
//first captruing is fired then event bubbling
//event capturing happend top to bottom
//event bubbling works from bottom to top

//true value means ,event must be captured or capturing should work and if it is false it means bubbling should work


//if we don't pass any value like true or false ,bydefault it will be false;

//event.stopPropogation() is used to stop the propogation of events 