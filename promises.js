console.log("starting point");

// function wakeUp(data, func) {
//     setTimeout(() => {
//         func(`its ${data} am please wake up`);

//     }, 100);

// }
// function exercise(data, func) {
//     setTimeout(() => {
//         func(`its ${data}am please do the exercise`);
//     }, 500);

// }
// function breakfast(data, func) {
//     setTimeout(() => {
//         func(`its ${data}am please do the breakfast`);


//     }, 1000);

// }
//so it is getting messing
//it is also called callback hell ,because there is so many callbacks;

// const data = wakeUp("6:00", (action) => {
//     console.log(action);
//     exercise("6:30", (action) => {
//         console.log(action);
//         breakfast("8:00", (action) => {
//             console.log(action);
//         });
//     });
// })


//promises

// //promises are the object representing eventual completion or failure of asynchronous operation


// const sub = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = true;
//         if (result)
//             resolve("do this");
//         else
//             reject(new Error("don't do this"));

//     },100);
// })

// console.log(sub);
// sub.then((res) => {
//     console.log(res);

// }).catch((err) => {
//     console.log(err);
// })



// directly resolving the promises

// const data = Promise.resolve("do this task");

// // here we have seen that we got our promise fullfilled instantly ,because here we have resolved the promise
// // but output would be asynchrnous

// console.log(data);
// data.then((res) => {
//     console.log(res);
// })

// const data = Promise.reject("don't do this");
// console.log(data);
// data.then((res) => {
//     console.log(res);

// }).catch((err) => {
//     console.log(err);
// })



function wakeUp(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`its ${data} am please wake up`)
        })
    },1000);

}
function exercise(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`its ${data}am please do the exercise`);
        }, 1000);
    })


}
function breakfast(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`its ${data}am please do the breakfast`);


        }, 10);
    })


}

//without promise chaining

//but it is again pyramind like structure


// wakeUp("6:00").then((res) => {
//     console.log(res);
//     exercise("6:30").then((res) => {
//         console.log(res);
//         breakfast("7:00").then((res) => {
//             console.log(res);
//         })
//     })
// }).catch((err) => {
//     console.log(err);
// })


//promise chaining

//much clear code

// wakeUp("6:00")
// .then((res) => {
//     console.log(res);
//     return exercise("6:30");
// })
// .then((res) => {
//         console.log(res);
//         return breakfast("7:00");
//     })
// .then((res) => {
//         console.log(res);
//     })
// .catch((err) => {
//         console.log(err);
//     });



//promise combinator --help us to execute more than one promise at a time and then return the result accordingly

//it give result in form of array and only return the arry of data  when all promieses will be resolved

//1
// Promise.all([
//     wakeUp("6:00"),
//     exercise("6:30"),
//     breakfast("7:30")

// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log("promies failed",err);
// })

//2
// //Promise.race[]-syntax is same as Promise.all but it will return the 1st promise which we get resolved or failed

// Promise.race([
//     exercise("6:30"),
//      wakeUp("6:00"),
//         breakfast("7:30")
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log("failed ", err);
// })


//3 Promise.allSettledd([])--> it will return an array of result will contain both failed as well as resolved promises , or we can say that if any promises will fail it will still work

// Promise.allSettled([
//     wakeUp("6:00"),
//     exercise("6:30"),
//         breakfast("7:30")
// ]).then((res) => {
//     console.log('res',res);
// }).catch((err) => {
//     console.log(err);
// })

//4 Promise.any([])-->it will return the first fullfilled promise and ignore all the rejected ones
//and if arr promises will be rejected then it will give aggregateError: all promises were rejected



// Promise.any([
//     exercise("6:30"),
//      wakeUp("6:00"),
//         breakfast("7:30")
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })


//using async await to resolve  the promises

// const result = async () => {

    //what if we don't want ot resolve the promiese by adding then , or what we don't to recieve promises and then wait for it to be resolved ,what we directly want the data
    //we can do that by using await keyword beofore the function it will wait until promise will  fullfilled or rejected

    //and make the outer function as async

    // to deal with reject promise use try and catch

//     try {
//         const message1 = await wakeUp("6:00");
//         console.log(message1);
//         const message2 = await exercise("6:30");
//         console.log(message2);

//         const message3 = await breakfast("7:00");
//         console.log(message3);

//     } catch (error) {
//         console.log("promies failed",error);

//     }


// }

// result();


//output

//then this case when promise will be intialized  so js engine will look for synchrnous code inside the promise and print it
//like here console.log(1) and console.log(3) is synchronous code --they will be printed before promise result will be printed


// const promies1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
//     console.log(3);
// });
// // until and unless promise will not be resolved 'then' function will not execute
// // in promise1 if don't resolve it so this "then" will not execute

// promies1.then((res) => {
//     console.log(res);

// })

//if there will be no resolve function ,then 'then' function will not execute if it is written



    // / output
//starting point

//1
//3
//stop
//2



// const fn= () => new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
// });
// console.log("middle");
// fn().then((res) => {
//     console.log(res);
//     console.log("then")
// })


//output

//since we are calling the fn() after the console.log("middle");
//so it will be print after middle

//if promises is not resolved it means promise is not returning anything so then method will not be called



//starting point
//middle
//1
//stop
//2

// function job() {
//     return new Promise((resolve, reject) => {
//         reject();
//     });
// }

// let promise = job();

// promise.then(() => {
//     console.log("success 1");
// }).then(() => {
//     console.log("sucess 2");
// }).then(() => {
//     console.log("sucess 3");
// }).catch(() => {
//     console.log("error 1");

// }).then(() => {
//     console.log("sucess 4");
// })

//after catch block ,all then will be executed

// function job(state) {
//     return new Promise((resolve, reject) => {
//         if (state)
//             resolve("success");
//         else
//             reject("failed");
//     })
// }

// let promise = job(true);

// promise.then((res) => {
//     console.log(res);
//     return job(false);
// }).catch((err) => {
//     console.log(err);

//     return "Error caught" //it will be treated as resolve or success

// }).then((data) => {
//     console.log(data);

//     return job(true);
// }).catch((err) =>
//    { console.log(err);}
//     );


//output

//success
//error
//Error caught



// promise.then((data) => {
//     console.log(data);    //success

//     return job(true);
// })
//     .then((data) => {
//         if (data !== "victory") {
//             throw "Defeat";     //it would throw as an error

//         }
//         return job(true);

//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);   ///Defeat
//         return job(false);
//     })
//     .then((data) => {
//         console.log(data);
//         return job(true);
//     })
//     .catch((error) => {
//         console.log(error);    //error
//         return "Error caught";   //it would be treated as resolve
//     })
//     .then((data) => {
//         console.log(data);     //error caught
//         return new Error("test");  //it is also a resolved promise or normal test ,it will go inside then

//     })
//     .then((data) => {
//         console.log("success",data.message);
//     })
//     .catch((data) => {
//         console.log("error", data.message);
//     });

//create a promise called firstPromise which will resolve to a text called first--means inside resolve function pass "first" as an argument

//create another promise called second promise which will resove firstpromise which we have created earlier
//then we will resolve our secondPromise,, and output of which we have to pass to the first promise then print the first promise


// const firstPromise = new Promise((resolve, reject) => {
//     resolve("first!");
// })

// const secondPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise);
    
// })


// secondPromise.then((res) => {
//     // console.log(res);
//     return res;
// }).then((res) => {
//     console.log(res);
// })







//rewrite using async await






// function loadJson(url) {
//     return fetch(url).then((response) => {
//         if (response.status == 200) {
//             return response.json();
//         }
//         else {
//             throw new Error(response.status);
//         }
//     });
// }

//   async function loadJson(url){
//     let data = await fetch(url);
//     if (data.status == 200)
//     {
//         let json = await data.json();
//         return json;

//     }
        
//     else
//         throw new Error(data.status);
// }

// loadJson("https://fakeurl.com/no-such-user.json").catch((err) => {
//     console.log(err);

// })


//solve Promises recursively

//shift() return the current element of the array and delete it from the array

function proRecurse(funcPromises) {
    if (funcPromises.length == 0) return;
    const currentPromise = funcPromises.shift();
    currentPromise
        .then((res) => {
        console.log(res);
    })
        .catch((err) => {
        console.log(err);
    })

    proRecurse(funcPromises);
     
   

}

proRecurse([
    wakeUp("6:00"),
    exercise("6:30"),
    breakfast("7:00"),
]);



//promise polyfill implementation
 








console.log("stop");



