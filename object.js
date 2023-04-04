console.log('program starting point');

// An object is a collection of properties, and a property is an association between a name(or key) and a value.A property's value can be a function, in which case the property is known as a method.


// const user = {
//     name: "amit",
//     age: 21,
//     "like this video": true,

// }

// user.name = "ankit";

//deleting

// delete user.age;

// console.log(user["like this video"]);

// console.log(user[name]);

//delete keyword is only used when we want to delete property from an object, not local variable

//below in function a is local variable


// const func = (function (b){
//     var a = 10;
//     delete a;
//     delete b;
//     return {a,b};
// })(5);
// console.log(func.a,func.b)

//how add dynamic values to object

// const propery = "firstName"
// const name = "amit"
// const user = {
    
//     // propery: name,
//     [propery]: name,
//     age: 10,
//     "hello":"go",
// }

// console.log(user.propery);  //undefined
// console.log(user[propery]); //amit

//how to iterate through an object

//using for in loop

// for (key in user) {
//     console.log(key, ":",user[key]);
// }



//outbased questions

// const obj = {
//     a: "one",
//     b: "two",
//     a:"three",
// }

//there in above code , if we have same key more than once so last value will replace the previous once
//but position will be of first occurence of that key

//create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2;

// const nums = {
//     a: 100,
//     b: 200,
//     title: "My nums",
// };

// function multiplyByTwo(obj) {
//     for (key in obj) {
//         if (typeof obj[key] === "number")
//             obj[key] *= 2;
//     }
        
// }

// multiplyByTwo(nums);




// console.log(nums);

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// //above code will be stored as
// //a["[object,object]"]
// a[c] = 456;
// //a["[object,object]"]
// //that why a[b]'s output will be 456 ,as it override by a[c]

// console.log(a);
// console.log(b);
// console.log(a[b]);


//what is JSON.strigigy and     JSON.parse

//JSON.stringify() //is used to convert an object into string and when we want to convert back our stringlify object into object then we used  JSON.parese();


// const user = {
//     name: "amit",
//     age:21,
// }

// const strObj = JSON.stringify(user);

// console.log("converted string",strObj);
// console.log(JSON.parse(strObj));

// //where we use JSON.stringify and JSON.parse --we use it in localStroarge , because in localStroage object is stored int the form of string

// localStorage.setItem("test", strObj);

// localStorage.setItem("new", user);  //it this case when we are storing the object without changing it into string it will be stored as test:[object Ojbect]

// console.log("items from local storage", JSON.parse(localStorage.getItem("test")));

// console.log(typeof "amit");

// const a = [..."amit"] //it would return an array of string element


// console.log(a);


// const user = { name: "amit", age: 21 };
// const admin = { admit: true, ...user };
// console.log(admin);

// const setting = {
//     username: "amit",
//     level: 19,
//     health:98,
    
// }

// const data = JSON.stringify(setting, ["level", "health"]); //it wlll only stringify the keys which we have passed in the array

// console.log(data);


// const shape={
//     radius:10,
//     diameter(){
//         return this.radius * 2;
// },
//     perimeter: () => 2 * Math.PI * this.radius, //here this keyword will point to window object , due to arrow function


// }
// console.log(shape.diameter());
// console.log(shape.perimeter());


// let user = {
//     name: "Piyush",
//     age: 24,
//     fullName: {
//         first: "ankit",
//         last:"chaudhary",
//     }
// };
// const name = "Amit chaudhary";

// // //here name already exists , so rename name variable , use :
// const {name:myName} = user;  //renaming key when destructuring object
// console.log(myName)



// //nested destructruing

// //for rename we use : but for nested destructruing again use {}

// const { fullName: { first } } = user;
// console.log(first);



//object refrencing

// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);
// console.log(c);



// console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1 } === { a: 1 });

//here both are independent and both objectshare pointing to different memory location


///object are only equal when they are refrencing the same area in the memory


// let person = { name: "amit" };
// const member = [person];
// person = null;
// console.log(member[0].name);
// console.log(member);

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//     console.log((x.number *= 2));
// };
// multiply();
// multiply();
// multiply(value);
// multiply(value);


// function changeAgeAndReference(person) { //here person is also referencing to personObj1 , so it will modify the personObj1

//     person.age = 25;

//     //now it is assigned a new object 
//     person = {
//         name: "John",
//         age: 50,
//     };
//     return person;
// }

// const personObj1 = {
//     name: "Alex",
//     age: 30,
// };

// const personObj2 = changeAgeAndReference(personObj1);
// console.log(personObj1); //it si changed -->name:Alex ,age -25
// console.log(personObj2); //name:John, age 50
 

//what is shallow copty and deep copy


//how to deep copy //clone an object

let user = {
    name: "Amit chaudhary",
    age: 21,
};
// const objClone = Object.assign({}, user);
// const objClone = JSON.parse(JSON.stringify(user));

const objClone = {...user};
objClone.name = "ankit";


console.log(user, objClone);


































































console.log("end");