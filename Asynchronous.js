setTimeout(() => {
    console.log("inside timeout");
    
}, 500);

// function hello(() => {
//     console.log("callback inside hello function");
// }
// );
function a() {
    console.log("a");

}

function b() {
    console.log("b");
}

a();
b();

// for (let i = 0; i < 10000; i++)
//     console.log(i);

function c(d) {
    console.log("inside c");
    d();
}
    
function d() {
    console.log("inside d");
}

let currentTime = new Date().getTime();
let endTime = currentTime;
while (endTime <= currentTime + 10000) {
    endTime = new Date().getTime();
}

console.log("end time");

// in above case settime callback's only run when call stack will be empty that's why "inside settimeout " statement will not be printed after expiration of 50 milisecond

//when global execution context will be popped out then call back of settimeout will run


