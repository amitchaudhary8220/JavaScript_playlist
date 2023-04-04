// Curring --> curring is a technique of evaluating function with multiple argument , into sequence of function with single argument


// In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.

// That is, when we turn a function call add(1,2,3) into add(1)(2)(3) . By using this technique, the little piece can be configured and reused with ease.
    
    
    // / curring using closure

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return a + b + c + d;
                
//             }
//         }
//     }
// }

//d is child of c , c is child of b , b is child of a


// const sumAll = sum(1);
// console.log(sumAll(2)(3)(4));

// console.log(sum(1)(2)(3)(4));


//curring using bind() method

// const multiply = function (a,b){
//     return console.log(a * b);
// }

// const multiply = (a) => {
//     return function (b) {
//         return a * b;
        
//     }
// }

// above function will work same as
// multiply(b){
// let a = 2;
// return a * b;
// }

// const multiplyTwo = multiply.bind(this,2);
// console.log(multiplyTwo(3));



// function sum(a){
//     return function (b){
//         return function (c)
//         {
//             return (a + b + c);
//         }
//     }
// }

// console.log(sum(2)(6)(1));

// function evaluate(operation) {
//     return function (b) {
//         return function (c) {
//             if (operation === "sum")
//                 return b + c;
//             else if (operation == "multiply")
//                 return b * c;
//             else if (operation === "divide")
//                 return b / c;
//             else if (operation == "substract")
//                 return b - c;
//             else
//                 return "Invalid operation";
//       }
//   }
// }

// console.log("answer is", evaluate("sum")(1)(2));

// console.log(evaluate("multiply")(2)(3));



// console.log(evaluate("asfa")(1)(3));

// function sum(a) {
//     console.log("a is",a);
//     return function (b) {
//         if (b)
//             return sum(a + b);
//         return a;
//     }
// }

// console.log(sum(1)(2)(3)());


//difference between curring and partial application
//arty means arguments

//partial application transform a function into diffrent functions with small arty

function add(a) {
    return function (b, c)
{        return a + b + c;
    }
}


//here above code is partial application ,it is not curring as we are passing 3 arguments but returned function are only 2


 //real world example of curring 

  
 //curring implementation
 
 // converting function f(a,b,c,d)===>f(a)(b)(c)(d);
 
function curry(func){
    return function curriedFunc(...args){
        console.log("args is", args);
        if (args.length >= func.length)
            return func(...args);
        else {
            return function (...next) {
               
                return curriedFunc(...args,...next);
            };
        }
    };
}
 
const sum = (a, b, c, d) => a + b + c + d;
const l = [1, 2, 3];
const totoalSum = curry(sum);
console.log(totoalSum(1)(6)(5)(6));
 
 