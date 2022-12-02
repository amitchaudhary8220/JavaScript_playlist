const arr = [1, 2, 3, 4, 5];

//map does not modify our actual array
//we can chain other method after it as it returns the new array


const mapResult= arr.map((ele) => ele + 2);

//foreach loop does not return anything

//but we can modify our actual array with foreach loop

//foreach will never return anything
//in case of foreach we can not chaing as it does not return anything


const forEachResult = arr.forEach((ele,i) =>  arr[i]=ele * 2);

console.log(mapResult, forEachResult, arr);


//difference between null and undefined

//undefined -means , variable is declared but not initialized yet,
//where as not define means , variable is not declared


console.log(typeof null) //type of null is object 
console.log(typeof undefined) //type of undefined is undefined


console.log(null == undefined); //it first do type conversion they compares the value
console.log(null === undefined); //it compares the data type as well as value , if either of them aren't equal return false


//What is type conversion?

// The == and != operators loosely compare two operands, i.e., while comparing two operands, if both operands aren't of the same data type, then the operator tends to convert either of them into other operand's type and then compares their values.

// This is one of the most important difference between == and === in Javascript

// Example:

// If we are about to compare two values, one string, and another number, then it will convert the string value to the number type and then compare the values.


// What is === and !== in JavaScript?
// The === operator is called strict equality operator (and !== is called strictly inequality operator). The === operators follow Strictly equality comparison algorithm, i.e., it doesn't do the type conversion of the operands before comparing their values and returns false even if the data type of the operands aren't the same.


//event delegation
document.querySelector("#products").addEventListener('click', (event) => {
    console.log(event);
})


//flatten the array

let newarr = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, [8, 9,], 10]
];

let flattened = [].concat(...newarr);

console.log(flattened);

//there is inbuilt method for flatteing the array in js also
// we can also provide the depth , to which we have to flat it

console.log(newarr.flat(2)); 

//

function a() {
    for (var i = 0; i < 3; i++){
        //using closure
        //now i have local scope
        function loop(ele) {
          setTimeout(function log() {
            console.log(ele);
        }, ele* 1000);   
        }
       
        loop(i);
    }
}

//alternate ,you can use let variable


a();

const myName = {
    firstName: "amit",
    lastName:"chaudhary",
}


printName =  function(place){
    console.log(this.firstName, " ", this.lastName, "from", place)


}

const name2 = {
    firstName: "ankit",
    lastName:"patel",
}
printName.call(myName,"mumbai");
printName.apply(name2, ["ghaziab","ram", "shaym"]);

const callLater = printName.bind(name2,"landon");
callLater();


//infinite curring



//Polyfill
// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.


//promise.all() it takes an array of promises and return the value of all promises , if everty promises is resolved

function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    });
}

Promise.all([showText("hello", 1000), Promise.resolve("done is"), Promise.resolve("it was last one")]).then((value) => {
    console.log("so value received is ", value);
})


//componetDidMound() ---> it will run  only once , when for the first time componet will be rendred

//comopentDidUpdate -- this will run everytime , component get renderd or states changes

//componentWillMOunt -- this will run only when component will be unmount

//for function componet -- life cycle method is useEffect

//useEffect(()=>{},[]) -with 0 dependency -acts as componentDidMound

//useEffect(()=>{},[anything]) -with dependency -acts as componentDidUpdate

    //useEffect(()=>{

    //acts  as clear function , behaves as componetWillMount
    //return ()=>{

    // }


    // }
    // , []) -with 0 dependency - acts as componentDidMound



    //ways to center a div

    
 
 
