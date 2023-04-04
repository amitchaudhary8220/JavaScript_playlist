 //closure will only be formed if we have accessed any local varibale of outerfunction inside our inner function


//const and let have script scope when they are declared outside any function or blcok

  const her = "sita";
let laxman = "chhotu";

        
// global scope

var ram = "ankit";


//we can not access let const and local varibale with this keyword


console.log("using this keyword", this.her, this.laxman, this.ram);
 
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

function a(){
    let ramnam = "Jai shree ram";
    let shivam = "chout bhai";
    
   
    function c() {
        const her = "sita";
        let laxman = "chhotu";
        
        
        
        
        console.log("laxman",this.laxman);
        console.log("her",this.her);
        console.log("ram",this.ram);

        console.log("ramnam", ramnam);
        console.log("ramnam", this.ramnam)
    }

    // return c;
    c();
}
a();

// const jai = {
//   har:"nam",

//   a() {
//   const ram = "ram ji";
//      b=()=> {
//       console.log('firs', this);

//     function c() {
//       console.log('this', this);
//     }
//     c();
//   }
//   b();
// }
// }

// jai.a();


// var b = 10;
// // a();
// const fun = a();
// fun();

