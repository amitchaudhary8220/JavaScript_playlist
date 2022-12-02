const myName = {
    firstName: "amit",
    lastName: "chaudhary",

    //here this referes to the "myName" object 
    // printName: function print(place,qualification, designation) {
    //     console.log(this.firstName, " ", this.lastName ,"is from ", place,qualification,designation );
        
    // }

   
}
// name.printName("Delhi",12,"actor");

let printName = function (place,qualification, designation) {
    console.log(this.firstName, " ", this.lastName ,"is from ", place,qualification,designation );
        
}

//in above function , if we are using anonymous function , in this case , "this"  keyword will point to the context object ,
// if we will use ()=> call back function there , in that case this keyword will point to global object, and there is no varibale like firstName or lastName in global object


const name2 = {
    firstName: "ankit",
    lastName: "chaudhary",
    

}
printName.call(myName, "mumbai", 12, "actor");
printName.call(name2,"Delhi","b.tech","software developer")

//this phenomenon is known as function borrowing

// we are using function of someother object , to do so we are using call()  method , inside call method 1st argument which we will pass , will point to this keyword , like in we below code = we passed name2 , so this will point to name2
 

 // we can pass more than one argument inside call() function , other arguments can be passed as argument to printName function (function on which we are applying call() function )

 // we can pass more than two arguments 


// name.printName.call(name2, "lucknow");

//apply function

//apply function is same as call() function , but apply take argument inthe form list

console.log("using apply method");
printName.apply(name2,["delhi" ,"b.tech" , "software developer"])


//bind() method

// in the case of bind , it does not call printName() method here , instead it returns the referce of this method , so that we can call it later , but it binded it with name2 or it bind the printName method with fuction which we passed in bind as argument


let printMyName = printName.bind(name2, "delhi", "b tech", "software developer");

console.log(printMyName);
printMyName();