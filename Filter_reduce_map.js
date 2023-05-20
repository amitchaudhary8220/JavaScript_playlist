var a = [1, 2, 3, 4, 5];
//
//so filter method basically filter the array on given condition

// var b = a.filter(a => a % 2 == 0)

//where as , if we want to create new array without modifying the original array and want the element of new array to be in somecalculation of original array ,we can use map

// in this case map will return boolean valause if  we try to filter the original arrray with map

// var c = a.map(a => a % 2 == 0);
// console.log("c", c);

// var d = a.map(a => a*10);
// console.log('d ',d);

//reduce -- reduces the whole array into a single by doing desired computation

// it takes call back as argument and call back expect two arguments , ie - a[0] and a[1] then (a[0],a[1]) and a[2] and so on

// var e = a.reduce((c, d) => c + d);
// console.log("output of reduce",e);
// console.log(d);
// console.log(c);
// console.log(b);

//we can also do chaining

// var l = a.filter(a => a % 2 != 0).map(a => a * 2).reduce((c, d) => c + d);
// console.log(l);

//polyfill for map
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};

Array.prototype.myMap = function (func) {

  console.log("this is ", typeof this);
  if (!Array.isArray(this)) throw new Error("it is not a list or array");

  let arr = [];
  for (let i = 0; i < this.length; i++) arr.push(func(this[i], i));

  return arr;

};

function insidemap(item, index){
  return item * 2;
}

// console.log(myMap.call(arrayLike,(item)=>item*item));


// console.log(a.myMap((item,index)=>item!==100));

//polyfill of filter

// console.log(a.filter((item, index) => item !== 2));

// Array.prototype.myFilter = function (func) {
//   if (!Array.isArray(this)) throw new Error(this + "must be an array or list");

//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (func(this[i], i)) arr.push(this[i]);
//   }

//   return arr;
// };

// console.log(a.myFilter((item,i)=>item!==2));

//polyfill for reduce

// console.log(a.reduce((initial,item,index)=>initial+item))

// console.log(a.reduce((a, b) => a * b));
// Array.prototype.myReduce = function (callback, initial = 0) {
//   if (!Array.isArray(this)) throw new Error(this, "must be an array ");

//   let value = initial;
//   for (let i = 0; i < this.length; i++) {
//     value = callback(value, this[i], i);
//   }

//   return value;
// };

// function callback(initial,item,index){
//   return initial+item;

// }

// console.log(
//   a.myReduce((a, b) => {
//     let c = a && b;
//     console.log("c is ", c);
//     return c;
//   })
// );
// console.log(a.myReduce(callback,10));

// const obj = {
//   1: "amit",
//   2: "ankit",
// };

// console.log(typeof obj[1]);
