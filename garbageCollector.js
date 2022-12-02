// how garbage collector and closure are related , how closure prevents garbage collector to free the memory

// in the below case memory allocated to x varible should be removed when function a is terminated or removed from call stack

// but since we returning the inside function i.e c it might heppen that we call function  c in future and it also needed its parent's lexical environment that why closure is formed -(function is bind up with the parent's lexical environment ) and it prevents that varibale of a form deleting by garbage collector


// in the below code z is not used in the function c , so garbage collection smartly delete the z and x will be there , we can say z will not be in the closure

function a() {
    var x = 10, z = 100;
    return  function c() {
        console.log(x);
    }
}

var z = a();
