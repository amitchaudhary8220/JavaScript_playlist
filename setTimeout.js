// function hello() {


    // loop will terminated its self before 1 ms
    // it will be printing here 6 as output , because of closure , as we know that we have reference of parent's lexical envirnoment
    // and since loop will be terminated before 1sec no output will be printed , after 1sec it will start printing 6. because value of i is changed to 6 now;

//     for (var i = 1; i <= 5; i++){
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
        
//        setTimeout(() => {
//            console.log("hello");
//        },0.00000000001);
//     }
//     console.log(i);
//     console.log("outside loop");
// }

// hello();



// second function

function hello() {
    for (let i = 1; i <= 5; i++){
    // it will print fine because i has block scope 
        setTimeout(() => {
            console.log(i);
        }, i*1000);
    }
    console.log("outside loop");
}
hello();
// third function

// we are asked to print 1 after 1 sec 2 after 2 sec and 3 after 3 and so on .... without using the let
// so we can print it like this 

// function hello() {
//     for (var i = 1; i <= 5; i++){

//         // we have taken i inside and function and then call the callback inside that function , so it will work fine now , why because here i or x has function scope means it is limied to this function only and the value of i is getting chanced outside of this function so there would be no effect on inner function because that is accepting the value from outside function i.e. inside() so every time i is incremented we passed value of i inside a new inside() function

//         function inside(x) {
//             setTimeout(() => {
//                 console.log(x);
                
//             }, x*1000);
//         }
//         inside(i);
//     }

//     console.log("outside loop");
// }

// hello();