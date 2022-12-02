//hoisting

function abc() {
    // console.log(a, b,c);
    console.log(a);
    
    //here variable b and c still be in teporal dead zone , so we can not access them

    //it does not matter wether const and let are in block scope or local scope ,we can never access them in teporal dead zone (means with initialization)

    const c = 12;
    let b = 10;
    var a = 2;

}
abc();

//implicit and explicit binding
const myName = {
    firstName: "amit",
    display: function () {
        console.log(this.firstName);
    }
}
const myName2 = {
    firstName: "ankit",
    
}
myName.display.call(myName2);


//implement caching/memoize function


//output


// console.log("a");
// setTimeout(() => console.log("set"), 0); //--goes inside 

// callback queue or task queueu
//callback queue priority is lower than mircotask priority queue

// Promise.resolve(() => console.log("pro")).then((res) => res()); //--goes inside micortask queue


// console.log("b");


//infinite curring

// function add(a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return function () {
//                     return a + b + c + d;
//                 }
//             }
//         }
//     }

// }

// console.log(add(5)(2)(4)(5)());

//what if we want to implement it for infinite arguments

function sum(a) {
    //what is happening here , so if b exist , means if there is next argument after a then sum will be called and it will converted into a+b , and now sum b act as argument after b
    // so now if next argument exists ,it will again call sum(a+b) otherwise , we have already calculated a+b ,and it not sotreed as a , so we'll return a;

    return function (b) {
        if (b)
        return sum(a + b);
        return a;
    }
}
//in this case we have to pass one blank function at the last

console.log(sum(2)(3)(4)(5)(6)());


console.log("starting functino a");
function a() {
    //whenever we try to access any varibale ,it first tries to look in its local scope then its prarent's lexical scope and so on , so in the below case c will first access b as let variable and we can not access let and const before initialization
    var b = 100;
    c();
    function c(){
        console.log(b);
    }
    // let d = 10;
    
}
//if we don't added any data type that will be in window that means it will be treated as var

// let d = 20;
var b = 10;

a();



