
let buttonsContainer = document.querySelector(".buttons-container")
let buttons = document.querySelectorAll("button");
let list = document.querySelector(".list-container");

 

function selectActiveBtn(e) {

    let button = e.target.closest("button");
    if ( (button == null) ||
        (!button.classList.contains("active"))) return;

    for (let btn of buttons) {
        btn.classList.toggle("active");

        let dataClass =  btn.dataset.action;
        list.classList.toggle(dataClass);
        if (!dataClass) return;
        let elems = document.getElementsByClassName(dataClass);
        for (let el of elems) {
            if (!el) return;
        }
    }
}