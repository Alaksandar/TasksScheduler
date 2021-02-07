
let buttonsContainer = document.querySelector(".buttons-container")
let buttons = document.querySelectorAll("button");
let list = document.querySelector(".list-container");
let li_list = document.getElementsByTagName("li");
let ul_list = document.querySelector(".list-container ul");

buttonsContainer.addEventListener("click", showList);
    

function showList(e) {

    let button = e.target.closest("button");    // делегирование
    if ( (button == null) ||
        (!button.classList.contains("active"))) return;

    for (let btn of buttons) {
        btn.classList.toggle("active");
        let dataClass =  btn.dataset.action;    
        if (!dataClass) return;                                    
        for (let li of li_list) {
            if (li.children[0].checked !== false) {
                li.classList.toggle(dataClass);
            }
        }
    }
}

let formElem = document.querySelector("#formElem");

formElem.onsubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData(formElem);
    const value = Object.fromEntries(formData.entries());
    if(!value.toList) return;
    let created_li = document.createElement("li");
    ul_list.append(created_li);
    let x = li_list.length;
    created_li.innerHTML = `<input type="checkbox" id=${x}><label for=${x}>${value.toList}</label>`;
};
