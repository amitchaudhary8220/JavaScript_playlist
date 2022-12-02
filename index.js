//hoisting a phenomenon in javaSrcipt by which we can access varibable and function before initializing them


getName();
console.log(a);
// getName1();
//here getName1() will throw the error that its is not a fucntion because it is treated as a variable during memory allocation time

var a = 2;

function getName(){
    console.log("Good morning");
}

var getName1 = () => {
    console.log("its fine");
}
getName1()
// getName("amit");
// console.log(a);