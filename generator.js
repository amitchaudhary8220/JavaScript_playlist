console.log(' <----- start  ----->')


// generator function 
// A generator function is a function that returns a Generator object, and is defined by the function keyword followed by an asterisk (*)


// function* generatorFunction() { }

// or 

// function* generatorFunction() { }

// function* is a more widely accepted syntax.


// Generator function expression
// const generatorFunction = function* () { }



// Generator as the method of an object
// const generatorObj = {
//     *generatorMethod() { },
// }

// Generator as the method of a class
// class GeneratorClass {
//     *generatorMethod() { }
// }


// function* generatorfn() {
//     return 'Hello from  generator'
// }


// const generator = generatorfn();

// If this were a regular function, we would expect generator to give us the string returned in the function. However, what we actually get is an object in a suspended state. Calling generator will therefore give output similar to the following



// generatorfn {<suspended>}
// [[GeneratorLocation]]
// : 
// generator.js:33
// [[Prototype]]
// : 
// Generator
// [[GeneratorState]]
// : 
// "suspended"
// [[GeneratorFunction]]
// : 
// ƒ* generatorfn()
// [[GeneratorReceiver]]
// : 
// Window
// [[Scopes]]
// : 
// Scopes[3]


// The Generator object returned by the function is an iterator. An iterator is an object that has a next() method available, which is used for iterating through a sequence of values. The next() method returns an object with value and done properties. value represent the returned value, and done indicates whether the iterator has run through all its values or not.

// console.log('generator -------> ', generator.next())

// Since the iterator is done, the generator function’s status will change from suspended to 
// closed. Calling generator again will give the following:


// console.log(generator)  // now generator is closed


//Unlike regular functions, generators cannot be constructed with the new keyword, nor can they be used in conjunction with arrow functions


// yield operators

// Generators introduce a new keyword to JavaScript: 'yield' . yield can pause a generator function and return the value that follows yield, providing a lightweight way to iterate through values.



// Create a generator function with multiple yields
function* generatorFunction() {
    yield 'Neo'
    yield 'Morpheus'
    yield 'Trinity'

    // return 'The Oracle'
}

const generator = generatorFunction()
// console.log(generator.next())
// console.log(generator.next())

// console.log(generator.next())

// console.log(generator.next())


// Note that a generator does not require a return; if omitted, the last iteration will return {value: undefined, done: true}, as will any subsequent calls to next() after a generator has completed.



// Iterating over generator 

// Using the next() method, we manually iterated through the Generator object, receiving all the value and done properties of the full object. However, just like Array, Map, and Set, a Generator follows the iteration protocol, and can be iterated through with for...of:

// for (const value of generator) {
//     console.log('value is ', value)
// }

// The spread operator can also be used to assign the values of a Generator to an array.

// Create an array from the values of a Generator object
// const values = [...generator]

// console.log(values)



// Both spread and for...of will not factor the return into the values (in this case, it would have been 'The Oracle').

// Note: While both of these methods are effective for working with finite generators, if a generator is dealing with an infinite data stream, it won’t be possible to use spread or for...of directly without creating an infinite loop.






// closing a generator 

// There are two additional ways to immediately cancel a generator: with the return() method, and with the throw() method.

// With return(), the generator can be terminated at any point, just as if a return statement had been in the function body. You can pass an argument into return(), or leave it blank for an undefined value



console.log(generator.next());
console.log(generator.return('closing the generator'))
console.log(generator.next())



// Method	Description
// next()	Returns the next value in a generator
// return()	Returns a value in a generator and finishes the generator
// throw()	Throws an error and finishes the generator


// yield delegation 

// In addition to the regular yield operator, generators can also use the yield* expression to delegate further values to another generator. When the yield* is encountered within a generator, it will go inside the delegated generator and begin iterating through all the yields until that generator is closed. This can be used to separate different generator functions to semantically organize your code, while still having all their yields be iterable in the right order.


function* delegate() {
    yield 3
    yield 4
}

// Outer generator function
function* begin() {
    yield 1
    yield 2
    yield* delegate()
}

const gen = begin();

for (const val of gen) {
    console.log('val is ', val)
}


// Infinite Data Streams

// One of the useful aspects of generators is the ability to work with infinite data streams and collections. This can be demonstrated by creating an infinite loop inside a generator function that increments a number by one.

// Define a generator function that increments by one
function* incrementer() {
    let i = 0

    while (true) {
        yield i++
    }
}

// Initiate the generator
const counter = incrementer()








//   Passing Values in Generators


// Throughout this article, we’ve used generators as iterators, and we’ve yielded values in each iteration. In addition to producing values, generators can also consume values from next(). In this case, yield will contain a value.

// It’s important to note that the first next() that is called will not pass a value, but will only start the generator. To demonstrate this, we can log the value of yield and call next() a few times with some values.



function* generatorFunc(value) {
    while (true) {
        value = yield value * 10;

    }
}

// Initiate a generator and seed it with an initial value
const gen1 = generatorFunc(0)

for (let i = 0; i < 5; i++) {
    console.log(gen1.next(i))
}




// async await with generators

// const getUsers =  function () {
//     const response =  fetch('https://jsonplaceholder.typicode.com/users')
//     const json =  response.json()

//     return json
// }

// getUsers().then(res => console.log(res))


const getUsers = asyncAlt(function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/users')
    const json = yield response.json()
    return json;
});
getUsers().then(res => console.log('res i s', res));

function asyncAlt(generatorfn) {
    return function () {
        const generator = generatorfn();
        function fn(next) {
                    if (next.done) {
                return Promise.resolve(next.value);
            }

            return Promise.resolve(next.value).then(res => {
                return fn(generator.next(res))
            })


        }
        return fn(generator.next())

    }

}
