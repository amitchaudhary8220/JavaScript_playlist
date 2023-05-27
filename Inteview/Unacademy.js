// flatten the arrary

let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

// console.log(arr.map((item, i) => [...item]));

let newarr = [];
for (let i = 0; i < arr.length; i++) newarr = [...newarr, ...arr[i]];

console.log(newarr);

let flattend = [].concat(...arr);
console.log(flattend);

console.log("direct flatten ", [...arr]);

//usecase of concat   -- bydefault concat spread at one level means , it can receive input as an array but add it the this arrray , as elements

let a = [1, 2, 3];
let b = a.concat([...[1, 23]], 45, 56, "amit");
console.log("b is ", b);

console.log(b.unshift(222), b);

// unshift  --return the new lenght of the array  ,,if we don't pass any value in shift then it will reutnr the previous length

//shift retuns the element which is just removed or if the array is empty returns undefined

///flat method

let c = [1, 2, 3, [33, 44, 55, [444, 556, [88, 99]]]];

// console.log("c after flatting", c.flat(333));//

//custom flat function

function customFlat(arr, depth = 1) {
  let newarr = [];

  arr.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      newarr.push(...customFlat(item, depth - 1));
    } else {
      newarr.push(item);
    }
  });

  return newarr;
}

console.log("custom flat", customFlat(c, 3));

//compose and pipe

//generator function
//difference between type and interface

//infinite curring

// function sum(a) {
//   return function (b) {
//     if (b) return sum(a + b);
//     return a;
//   };
// }

// console.log("sum is ", sum(1)(2)(12)(34)());

//how reduce work

const e = [5, 2, 3];

console.log(
  "reduce",
  e.reduce((prev, item) => {
    console.log("item is ", item, " prev is ", prev);
    return item + prev;
  }, 1)
);

// Array.prototype.myReduce = function (fn, initial) {
//   if (!Array.isArray(this)) throw new Error("reduce must be applied on array");

//   let sum = initial;
//   for (let i = 0; i < this.length; i++) {
//     if (sum) sum = fn(sum, this[i]);
//     else sum = this[i];
//   }

//   return sum;
// };

// function pass(prev, item) {
//   return prev + item;
// }

// console.log(
//   "myreduce ",
//   e.myReduce((prev, item) => prev * item)
// );

//pipe and compositiioni --The concept is to execute more than a single function, in a given order and pass the result of a function to the next one.

//pipe execute function form left to right and composition from right to left;

console.log(
  "reduceRight",
  e.reduceRight((prev, item, index, e) => {
    console.log("prv is ", prev, "item is ", item);
    return prev + item;
  })
);



