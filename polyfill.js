//polyfill for bind means , creating out bind method, so how we implement our bind method


let myName = {
    firstName: "amit",
    lastName: "chaudhary"
}

let name2 = {
     firstName: "ankit",
    lastName: "patel"
}

//we cannot use here arrow function


let printName = function (place, qualification) {
    console.log(this.firstName, " ", this.lastName,"from", place, qualification);
}


let print = printName.bind(myName,"delhi");
print(12);

//creating bind method named mybind()
// as we know that bind method is accessable to all the method , how implement this property -->
// how make mybind accessable to all the functions

//to put this function in Function.Prototype

//how to access the function which is attached to bind-- use this keyword
// as we seen earlier that we can call any function with the help of call and apply methods and can pass object and arguments to it

// so to call the attached method use "this " keyword and this keyword here is that function   in this case -- printName


//bindign mybind to Function.prototype

Function.prototype.mybind = function (...args) {
   // to take first object ,take is out form ...args array
    
    //as we want to return function reference , so return the function

    //now we also need other argument which are passed other than first object

    let obj = this;

    let arr = args.slice(1);


  //we also want to take the arguments when we call the functino , so function () also need arguments 
    return function (...args2) {
        //...arr --> using spread operation to split the array's element

        //since args2 is also an array , we also need to split it too.


        obj.apply(args[0], [...arr,...args2]);
    
    }
    
   

}

let callLater = printName.mybind(name2, "lucknow");

//now we also 

callLater("b tech");




