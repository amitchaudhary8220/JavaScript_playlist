// let arr = [
//   ["hisName", "amit"],
//   [2, "lucknow"],
// ];
// //making object from array

// let obj = Object.fromEntries(arr);
// //fromEntries returns object from applies array

// console.log("obj", obj);

// console.log("what is retured by oject.entries()", Object.entries(obj));

//entries returns an iterable of key:value pair from appplied object

//map methods  -->
//set //get  //deleted //has //clear //size   //values() //keys  //entries
// let map = new Map(Object.entries(obj));
// map.set(1, "added number here");
// map.set("number", 1);

// // console.log(map);
// console.log(map.values(), map.keys());

// console.log(map.get("hisName"));

// console.log("has 1", map.has(1));

//set methos -->
//add  //has //delete //clear //size

// let set = new Set();
// set.add([1, "amit"]);
// set.add(2);
// set.add("ami");

// console.log(set.keys(), set.values());

let john = { name: "john" };

let array = [john];
let map = new Map();
map.set(john, "new one");
let weakmap = new WeakMap();
weakmap.set(john, "new user in weakmap");

john = null;
console.log("map is ", map, " weakmap ", weakmap.get(john));

console.log("array is ", array);
john = { name: "rohan" };
console.log(array, " john is ", john);
