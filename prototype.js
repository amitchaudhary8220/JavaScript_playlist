let arr = ["amit", "ankit"];



const object={
    name:"amit",
    city:"lucknow",
    getIntro: function () {
        console.log(this.name + " " + this.city);
}
   
   
}

// console.log("object ");
object.getIntro();

const printName = function () {
    console.log(this.name + " " + this.city);
}

//not recommend (avoid using it)
//what if we is want to change the prototype of a ojectt
const object2 = {
    name:"chhotu",
}


//object prototyping

object2.__proto__ = object;

//by doing above thing , we can access object property by object2

//when we try to access any property first it will search on top of main object ,if it doesn't 
//find then it will search in proto of it, then proto of its proto ,and chain goes like this


//this is called prototypal inheritance , object2 is inheriting the property  of object


object2.getIntro();
//like for above code , name will be printed from object2 and city will be printed form object

console.log('object2 after prototyping',object2.__proto__);

printName.call(object2);


Function.prototype.mybind = function () {
    console.log("mybind");
}

//here we are binding mybind method with function prototype , so that all methods can acceess mybind

function fun() {
    console.log("inside fun")
}


fun.mybind();

//why we use 'double underscore' for proto , so that no one endup missing with prototype mymistak , bacause no body type 'double underscore' by mistake


Function.prototype.print =  ()=>{
    console.log("this is print function ");
    // return;
}

fun.print();






