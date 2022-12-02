const mydebounce = (func, dalay) => {   
     let time;
    return function (...args) {
        if (time)
            clearTimeout(time);
        time = setTimeout(() => {
            func(...args);
            
        }, dalay);
        
         
     }
}

const onChangeHandler = mydebounce((event) => {
    console.log(event.target.value);
    
}, 1000);
 
document.querySelector('input').addEventListener('input', onChangeHandler);