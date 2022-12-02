console.log("starting point");

//IIFE->immediately invoked function expresstion


// (function squre(nums) {
//     console.log(nums * nums);
// })(5);


// let res=(function (x) {
//     return (function (y) {
//         console.log(x);
//         // return y;

//     })(2);
// })(1);
// console.log(res);


var x = 50;
//when sepreate execution context will be created for function , all the varible and fuction inside this function will be hoisted on the top of the scope
//so here when we will access x , so x is already hoisted and its value is undefind thats why it will not in global scope to search for it


// function z() {
//     console.log(x);
//     var x = 10;

// }
 
// z();

//Rest --> used to merge a list of function argument into array

//spread--> split the arrray or object element


// function multiply(...nums) { //here we are merging different arguments to arary so it is Rest operator

//     console.log(nums[0]*nums[1]);
// }



// var a = [5, 6];
// multiply(...a); //--here we are splitting the array's element so it as spread operator

// const fn = (a, x, y,...num) => { //Rest parameter must be last formal parameter so that they can combined the remaining values

//     console.log(x, y, num);
// }


// fn(5, 6, 7, 8, 9, 5);


//differences between the arrow function and normal function

//1 syntax

// const res = () =>{}
// function res(){}


//2: return
//we can omit retur keywork if it is oneliner in arraow function

// const res = () => 10 + 5;

// function result() {
//     return 5 + 6;
// }


//3:arguments

// const res = () => {

//     console.log(arguments);
// }

//here if we haven't declared any param. ,we cannot access the arguments


// function result() {
//     console.log(arguments);
// }

//we are not declaring any parameter still we can access the arguments in normal function


// result(1, 3, 4, 5);
// res(3, 4, 5);


//4 this keyword

const name = {
    firstName: "amit",
    res: ()=> {
        console.log(this.firstName);
    },
    getName(){
        console.log(this.firstName);
    },
}

name.res(); //res will give undefined because in array function this keyword point to the global scope 
name.getName(); //in case of normal function this keyword point to the current object

 
console.log("end");