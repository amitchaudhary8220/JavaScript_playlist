//this let is created in script and it has script scope
var g = 12;
let a = 100;
{
     //this let has block scope
    let a = 10;
    let g= 10;
   // var has global scope ,because they are attached with global object
    var b = 100;
    const c = 1000;
    // console.log(a);
    // console.log(b);
    // console.log(c);
    
    
}

function hello() {
   
    console.log("hello");
    let z = 10;
    var v = 12;
    const l = 15;
    console.log(z);
    console.log(v);
    console.log(l);
}

hello();
console.log(v); //it will throw error 
console.log(b);
console.log(a);