console.log("start");

function z() {
    var b = 100;
    function x() {
        var a = 10;
        console.log("inside x");
    function y() {
        console.log(a,b);
        
    }

    return y;
    }
     return x();
}
 
var func = z();
console.log(func);
func();

//when we are returning the function y , its closure is also getting returned and its closures are closure(x) and closure (z) , thats why if  we again this function we will be having the access of its parent's lexical  envirnoment  means we can access the varibale of its parent


// closure is the combination of functio and its lexical envirnoment

//when we return a function its closure it is also get returned

// a closure is created everytime , a function is created


//every closure has 3 scope
//1 local scope
//2 outer function scope
//3 global scope

// let count = 0;
// (function printCount() {
//     if (count == 0) {
//         let count = 1;
//         console.log(count);
//     }
//     console.log(count);
// })();

// function createBase(a) {
//     return function (b) {
//         console.log(a + b);
//     }
// }
// var addSix = createBase(6);
// addSix(10);
// addSix(24);


//how to optimize time with closure

// function find(index) {
//     let a = [];
//     for (let i = 0; i < 1000000; i++){
//         a[i] = i * i;

//     }
//     console.log(a[index]);
// }

// console.time("6");
// find(3);
// console.timeEnd("6");
// console.time("44");
// find(55);
// console.timeEnd("44");


//optimizing above code

// function find() {
//     let a = [];
//     for (let i = 1; i < 10000000; i++)
//     a[i] = i * i;

//     return function (index) {
//         console.log(a[index]);
//     }
// }

// const value = find();
// console.time('6');
// value(6);
// console.timeEnd('6')
// console.time('16');
// value(16);
// console.timeEnd('16')
// console.log("end");



//blockscope and setTimeout

// function a() {
//     for (var i = 0; i < 5; i++){
//         console.log('i', i);
        
//         function call(arg)
//         {setTimeout(() => {
//             console.log(arg);
//         }, arg * 1000);
//         }
//         call(i);
//     }

//     console.log("outside i",i);
// }

// a();



//how would you use a closure to create a private counter
//it is recommed to put undersocre'_' before private variable ,not necessary


// function counter() {
//     var _counter = 0;
   
//     function add(increment) {
//         _counter += increment;
//     }
//     function retrive() {
//         return "counter == " + _counter;
//     }

//     return {
//         add,
//         retrive,
//     };

// }

// const c = counter();
// c.add(5);
// c.add(20);
// console.log(c.retrive());

//here we are not directly accessing the _conter variable instead using function to access that varible
//private  counter


//module Pattern

// var Module = (function () {
//     function privateMethod() {
//         console.log("private");
//     }

//     return {
//         publicMethod: function () {
//             console.log("public");
//             // privateMethod();
//         }
//     }}
// )();
// Module.publicMethod();

// Module.privateMethod();


//Make it run only once

// let view;
// function likeTheVideo() {
//     let called = 0;
//     return function ()
//     {
//         if (called > 0)
//     console.log("already liked the video");
// else {
//     console.log("Thanks for liking the video");
//     called++;
// }}
// }

// let isLiked = likeTheVideo();
// isLiked();
// isLiked();
// isLiked();
// isLiked();
// isLiked();

//once Polyfill


// function once(func, context) {
//     let ran;
//     return function () {
//         if (func){
//             ran = func.apply(context || this, arguments);
//             func = null;
//         }
//         return null;
//     }
// }

// let hello = once((a, b) => {
//     console.log("hello", a, b);
// })

// //it will run only once
// hello(1, 2);

// hello(1, 2);

// hello(1, 2);
// hello(1, 2);

//Memoize Polyfill

//caching or memoize function

// const memoize = (func,context) => {
//     const result={};
//     return function (...args) {
//         let argCache = JSON.stringify(args);
//         if(!result[argCache])
//             result[argCache] = func.call(context || this, ...args);
        
//         return result[argCache];
           
        

        
//     }
// }

// const clumsyProduct = (num1, nums2) => {
//     for (let i = 1; i < 100000000; i++){ }
//     return num1 * nums2;
    
// }

// const memoizeProduct = memoize(clumsyProduct);
// console.time('6');
// console.log(memoizeProduct(9999, 333));
// console.timeEnd('6');
// console.time('8');
// console.log(memoizeProduct(9999, 333));
// console.timeEnd('8');




//difference between closure and scope
































































console.log("end");

