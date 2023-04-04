//when we donot want to add eventlistner to every child element because that will cause performance as well as memory issue

//event delegation is possible becuase of event bubbling , event is trigerred from bottom to up


// document.querySelector("#catories").addEventListener('click', (e) => {
//     console.log(e.target.id);

//     // window.location.href = "/"+e.target.id;

//         })

document.querySelector("#categories").addEventListener('keyup',(e) => {
    console.log(e);
    if (e.target.dataset =="upper")
        e.target.value = e.target.value.toUpperCase();
    if (e.target.dataset == lower)
        e.target.value = e.target.value.toLowerCase();

})