console.log("start");

//implicit binding


this.a = 5;

// console.log(this.a);
// console.log(this);


// function getParam() {
//     //here this will point to its parent object and parent object here is window object
//     console.log(this.a);
// }

// const getParam = () => {
//     //here this will ponit to window object because there is no parent of window object

//     console.log(this.a);
//     console.log('this inside param',this);
// }
// getParam();

// const user = {
//     name: "amit",
//     age: 21,
    // getName() {
    //     //here also this will point ot its parent object ,and here parent object is user object itself

    //     console.log(this.name);
    //     console.log(this);
    // }

    // childObj: {
    //     newName: "ankit",
    //     getName() {
    //         //here this keyword is pointing to its parent object ,which in this case childObj and that's why this.name is undefined because there no name variable inside childObj

    //         console.log(this.newName, "and", this.name);
    //     }
    // }


    // getName: () => {
    //     //in this case getName's parent is user and user's parent is window ,so this keyword will point to window oject and there is no name variale in window 
    //     console.log(this.name);
    //     console.log(this);
    // },

    // newObj: {
    //     newName:"ram",
    //     getDetails() {
            //this keyword inside arrow function points to its parent's parent
            //means here parent object of getName is getDetails() and parent of getDetails() is newObj so this keyword here pointing ot newObj
            
//             const getName = () => console.log(this.newName,"and",this.name, "and oject is", this);
//             getName();
           
//         }
        
//     }
   
    
// }
// user.getName();

// user.newObj.getDetails();

// user.childObj.getName();

//this keyword inside a class


// class user{
//     constructor (n) {
//         this.name = n;
//        this.meraName="ram hai";
//     }

//     //this inside a class will point to everything which is inside a constructor
//     getName(){
//         console.log(this.name);
//     }
// }

// const User = new user("amit");

// console.log(User);
// User.getName();



//output 

// const user = {
//     firstName: "amit",
//     //here user's parent is window so it is pointing to window

//     lastName: this,
//     getName() {
//         const firstName = "ankit";
//         return this.firstName;
//     },
// };

// console.log(user.getName()); //amit
// console.log('this of user', user.lastName)


//what is result of accessing its ref and why


// function maekUser() {
//     return { 
//         name: "John",
//         //here this will point to maekUser's parent because it is simply inside a normal function and this keyword inside a formal function always points to its parent
//         //ref:this,
        
//         //now "this " keyword will point to this anonymous object because now it is inside an object and it will point to ref's parent 

//          ref(){
//              return this;
//         },
        
//     };
// }

// let user = maekUser();
// console.log(user);
// console.log(user.ref().name);
 

// const user = {
//     name: "amit chaudhary",


//     lgMessage() {
//         console.log(this.name);

//     },
    // newObj: {
    //     firstName : "ankit",
    //      getName :() => {
    //         console.log(this.firstName,"and ",this.name);

    //     }
     
    // },

//     getDetails(){
//         firstName = "ankit";
//         console.log('this inside getDetails', this);
//         getName = () => {
//             console.log("this inside getName", this);
//             console.log(this.firstName,"and ",this.name);

//         }
//         getName();
//     }

// };

// // console.log(user.getDetails());  //undefined and amit chaudhary

// //here user.lgMessage will be copied as a callback ,which will execute independently and it will no loger have access to use  object ,so it will point to window object ,so there is no name variable in window ojbect

// //how to fix this problem

// // setImmediate(user.lgMessage, 1000);

// //just a pass a function inside timeout and call this function inside that function

// setTimeout(function () {
//     user.lgMessage();
// }, 1000);



// // setTimeout(user.newObj.getName, 1000);

// setTimeout(user.getDetails, 1000);


// const user = {
//     name: "amit",
//     greet() {
//         return `Hello ,${this.name}!`;
//     },
//     farewell: () => {
//         return `Goodbye, ${this.name}!`;
//     }
// }

// console.log(user.greet());
// console.log(user.farewell());


//take two varibale as input

// let calculator = {
//     read() {
//         this.a = +prompt("a = ", 0);
//         this.b = +prompt("b = ", 0);
//     },

// sum() {
//     return this.a + this.b;

//     },
//     multiply() {
//         return this.a * this.b;

//     }
    
// };
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.multiply());

// var length = 4;
// function callback() {
//     console.log(this);
//     console.log(this.length);
// }

// callback();

// const object = {

//     length: 5,
//     // method(fn) {
//     //     // name = "ram";
//     //     // fn();
//     // },
    
//     method() { //arguments is array of arguments [callback ,2 ,3] -- here parent of the backback is array
//         arguments[0](); //output 3 --> length of the current array

//     }
// };
// // object.method(callback);

// object.method(callback, 2, 3);




const calc = {
    total: 0,
    add(a) {
        this.total +=a;
        //we are returning this so that we can access other objects 
        return this;
    },
    multiply(a) {
        this.total *= a;
        return this;
    },
    subtract(a) {
        this.total -= a;
        return this;
    }

}

const result = calc.add(5).add(4).multiply(2).subtract(3).add(5);
console.log(result.total)
















































































































console.log("end");