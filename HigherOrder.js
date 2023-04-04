//a function, which takes function as an argument ,or return a function , is know as higher order function

//and the function which is passed an as argument ,tht is known as call back function, and it is only possible because function are "first class citizen" in js



const radius = [3, 1, 2, 4];

// const area= radius.map((r) => r * r * Math.PI);
// const circumference = radius.map((r) => 2 * Math.PI * r);
// const diameter = radius.map((r) => 2 * r);
// console.log("area is ", area);
// console.log("circumference is ", circumference, "diameter is ", diameter);


//functional prgramming

const area = (radius) => {
    return  Math.PI * radius * radius;
}

const circumference = (radius) => 2 * Math.PI * radius;

const diameter = (radius) => 2 * radius;



//generic function
//binding calcute to Function prototype so that ,any function can access it

//now make calculate to work like map function


Array.prototype.calculate = function(logic){
    // const arr = this;
    console.log("arr ", this);
    const output=[];
    for (let i = 0; i < this.length; i++)
        output.push(logic(this[i]));
    
    

    return output;
}
console.log(radius.calculate(area));

// console.log("area array is ", calculate(radius, area));
// console.log("circumference is ", calculate(radius, circumference));
// console.log("diameter is ", calculate(radius, diameter));


console.log("using this keyword", this.calculate, this.radius);