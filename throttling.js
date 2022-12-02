//throttling -- what if we don't want to  our clickhander function to get triggred each time when button is click
// what if want it to triggered only a certain interval of time , in this case we use throttling which delayed the click functionality



function clikcHandler() {
    console.log("clicked");
}


let enhancedClickHandler=throttle(clikcHandler, 10000);
function throttle(func, limit) {

    //flag won't be reinitialized everytime since returing function formed a  closure with its outer envirnoment

     let flag = true;
    return function () {
        console.log("getting clicked");
        if (flag)
        {
            func();
            flag = false;
        }
        setTimeout(() => {flag = true}, limit);
        
    }
    
}



document.getElementById("buttonId").addEventListener("click", enhancedClickHandler);

