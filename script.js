function updateHandler(id) {
    return function (content) {
        document.querySelector("#" + id).textContent = content;
    }

}

//now we can select our element once and use it many times ,so it is working as curring

const updateContent = updateHandler("hello");
updateContent("amit");
updateContent("ankit");

