 //closure will only be formed if we have accessed any local varibale of outerfunction inside our inner function


//const and let have script scope when they are declared outside any function or blcok

const her = "sita";
let laxman = "chhotu";
        
// global scope

var ram = "ankit";


//we can not access let const and local varibale with this keyword


// console.log("using this keyword", this.her, this.laxman, this.ram);
 
//local scope


{
    //shadowing
    let hello = "hello";
  var ram = "anurag";

}
var func = () => {
  console.log("inside func");
}
var func1 = function () {
  console.log("inside func1");

}

func();
func1();

function a() {
    let ramnam = "Jai shree ram";
    let shivam = "chout bhai";
    
   
    function c() {
        // const her = "sita";
        // let laxman = "chhotu";

        
        //here this keyword is still pointing to window object or global object
      // we cannot access local variabl with this keyword and let const and var bahaves same inside function in terms of scope
        //they have local scope 

        //but propertie will be same here , like we can not only declare const , we have to also initialize it.
        
        console.log("laxman",this.laxman);
        console.log("her",this.her);
        console.log("ram",this.ram);

        console.log(b, "ramnam", ramnam);
        console.log("ramnam", this.ramnam)
    }

    return c;
    // c();
}
// a();
var b = 10;
// a();
const fun = a();
fun();

