let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let newArr = arr.map((item) => {
  if (item % 2 == 0) return item * item;
});
// console.log(newArr)

let newarr = newArr.filter((item, i) => item !== undefined);
console.log("newarr ", newarr);

// let str= ["a", "cccc", "bbbbb", "dddddd", "ee", "fff"]

// // Output: ["a", "ee", "fff", "cccc", "bbbbb", "dddddd"]

// str.sort((a,b)=>a.length-b.length);
// console.log('str',str);

// function myreverse(str) {
//   let newstr = "";
//   for (let i = 0; i < str.length; i++) newstr = str[i] + newstr;

//   return newstr;
// }

// let str = "Mahendra Singh Dhoni";
// console.log("old str", str.length);

// let newarr = str.split(" ");

// str = "";
// for (let i = 0; i < newarr.length; i++) {
//   str += myreverse(newarr[i]) + " ";
// }

// str = str.substring(0, str.length - 1);

// console.log(" newstr-->", str.length);
// output: "ardnehaM hgniS inohD"

//Given an array A[] of n numbers and another number sum, the task is to check whether or not there exist two elements in A[] whose sum is exactly sum.

// let arr = [0, -1, 2, -3, 1]

// let sum= -2

//Output: Yes
// Explanation:  If we calculate the sum of the output,1 + (-3) = -2

// Input: arr = [1, -2, 1, 0, 5],
// sum = 0
// // Output: No

// function isExist(arr,sum){
//     let set=new Set();

//     for(let i=0;i<arr.length;i++){
//         if(set.has(sum-arr[i]))
//         return true;
//         set.add(arr[i]);
//     }

//     return false;

// }

// console.log('is element exist',isExist(arr,sum));
