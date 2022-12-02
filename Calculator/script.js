function calcaulate(n) {
    return function (a) {
        return function (b) {
            if (n === "add") {
                return a + b;
            }
            else if (n === "multiply") {
                return a * b;
            }
            else if (n === "divide") {

                return a / b;
            }
            else if (n === "substract") {
                return a - b;
            }
            else
                return "Invalid operator";
        }
  
    }
}

console.log(calcaulate("add")(1)(2));
console.log(calcaulate("multiply")(4)(3));





