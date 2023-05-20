//lets learn about scope in deep

// function hello() {
//   let a = "a"; //local scope
//   var b = "b"; //local scope
//   const anurag = "anurag";
//   if (true) {
//     let c = "c"; //block scope
//     var d = "d"; //local scope
//     const anurag = "anurag"; //block scope

//     console.log("a and c inside if", a, c);
//     console.log("b and d inside if", b, d);

//     if (true) {
//       let ram = "ram"; //block scope
//       var shivam = "shivam"; //local scope

//       if (true) {
//         let amit = "amit"; //block scope
//         var ankit = "ankit"; //local scope
//       }
//     }
//   }

//   //   console.log("b and d outside if", a, c);
//   console.log("b and d outside if", b, d);

//   function no() {
//     let non = "no"; //block scope
//     var hm = "hm"; //local scope
//   }
//   no();
// }

// hello();

//interview question

// let emp = [
//   {
//     name: "abc",
//     age: 45,
//   },
//   {
//     name: "lal",
//     age: 24,
//   },
//   {
//     name: "bal",
//     age: 12,
//   },
//   {
//     name: "pal",
//     age: 23,
//   },
//   {
//     name: "hari",
//     age: 40,
//   },
//   {
//     name: "guddu",
//     age: 34,
//   },
// ];

// const newArr = emp.filter((item) => item.age < 26);

// const onClickHandler = () => {
//   newArr.forEach((item) =>
//     console.log(`{name:${item?.name},age:${item?.age}}`)
//   );
// };

// const app = document.getElementById("newdata");
// app.addEventListener("click", onClickHandler);

// // document.getElementById("newdata").innerHTML = `<p>hello</p>`;
// // newArr.forEach((item) => {
// //   for (let key in item) {
// //     console.log( `${[key]}: ${item[key]} `);
// //   }
// // });

// // for(let i in newArr)
// // console.log(`{name:${newArr[i].name},age:${newArr[i].age}}`)

// //write simple promise function

// const fetchData = (data) => {
//   return new Promise((resolve, reject) => {
//     if (data == 30) resolve("equal to or greater than 30");
//     else reject("smaller than 30");
//   });
// };

// const resolvePromise = async (data) => {
//   console.log("going to start");

//   const response = await fetchData(data);

//   console.log("res", response);

//   console.log("end");

//   //   return response;

//   function abc() {
//     console.log("abc");
//   }

//   abc();

//   //   const pro = fetchData(data);
//   //   console.log("pro", pro);

//   //   pro
//   //     .then((res) => console.log("res", res))
//   //     .catch((err) => console.log("err", err));

//   //   return "busy in resolving the promise";
// };

// console.log("new promise----->", resolvePromise(30));

function EmployeeNames() {}

EmployeeNames.prototype = {
  name: [],
  showNames: function () {
    return this.name;
  },
};

var e1 = new EmployeeNames();
e1.name.push("arr");

console.log(e1.showNames());

var e2 = new EmployeeNames();
e2.name.push("arr");

console.log(e2.showNames());

//what is progressive web app - what is service worker

//downgit

//google powerhouse -- performance checing tool

//using webpack can we set any roles like checking  css and js code to be a better coading standards   --es lint
//what is web accessbility

//what double a and triple a standards

//what is w3 standards

//broweser storeage -- indexdb

let arr = [10, 5, 6, 56, 23];
// let minval = Math.min.apply(null, arr);
// let minval = Math.min.m(null, arr);
// console.log("minval is ", minval);

// console.log(Math.min(...arr));
// console.log(Math.min(12, 34, 5, 6));

//what is tag and element in html
//difference between strong and bold tag

function f1() {
  // console.log("x and y ", x, y);
  setTimeout(() => {
    // console.log(x);
    console.log(y);
  }, 3000);

  // var x = 2;
  let y = 23;

  //   for (let i = 0; i < 3; i++) {
  //     setTimeout(() => {
  //       console.log(i);
  //     }, 1000);
  //   }

  //   console.log("loop terminated");
}

f1();

// let x = {},
//   y = { name: "amit" },
//   z = { name: "ankit" };
//   l=[1,2,3];

// x[y] = { name: "anurag" };
// x[z] = { name: "shivam" };
// x[l]=l;

// console.log("x[z]", x[z],x);
