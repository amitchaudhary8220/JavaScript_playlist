//difference between event.target , event.currentTarget , this.target

// document.querySelector("#grand").addEventListener("click", () => {
//     console.log("grand is clicked");
// },true)
// document.querySelector("#parent").addEventListener("click", (e) => {
//     console.log("parent is clicked");
//     // e.stopPropagation();
// },false)
// document.querySelector("#child").addEventListener("click", () => {
//     console.log("child is clicked");
// },false)

const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

//event bubbling

// div.addEventListener("click", func);
// form.addEventListener("click", func);
// button.addEventListener("click", func);

//event capturing --> it is fired from top to bottom but we have provide one extra variable in event listener
// that is capture:true --inside eventlistener where we don't provide capture variable , event bubbling will work

// div.addEventListener("click", func, { capture: true });
// form.addEventListener("click", func, { capture: true });
// button.addEventListener("click", func, { capture: true });

// function func(event) {
//   alert(
//     "target =" +
//       event.target.tagName +
//       " ,  currentTarget = " +
//       event.currentTarget.tagName +
//       " , this target =" +
//       this.tagName
//   );
// }

//event stopPropogation

div.addEventListener("click", (event) => {
  // e.stopPropagation()
  alert("target" + event.currentTarget.tagName);
});

form.addEventListener(

  "click",
  (e) => {
    // e.stopPropagation();
    alert("target =" + e.currentTarget.tagName);
  },
  { capture: true }
  
);

button.addEventListener("click", (e) => {

    // e.stopPropagation(); 
  alert("target ", e.currentTarget.tagName);

});

//how do we stop event bubbling or capturing  --> just provide event.stopPropogation() ,after which element we don't event bubbling to occur

//there are some events which may not bubble

//event capturing and event bubbling
//first captruing is fired then event bubbling
//event capturing happend top to bottom
//event bubbling works from bottom to top

//true value means ,event must be captured or capturing should work and if it is false it means bubbling should work

//if we don't pass any value like true or false ,bydefault it will be false;

//event.stopPropogation() is used to stop the propogation of events
