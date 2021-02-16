
let buttonsContainer = document.querySelector(".buttons-container")
let buttons = document.querySelectorAll("button");

let list = document.querySelector(".list-container");
let li_list = document.getElementsByTagName("li");
let ul_list = document.querySelector(".list-container ul");

let form = document.querySelector("#form1");
let textInput = form.querySelector('[type="text"]');
let submit = form.querySelector('[type="submit"]');



buttonsContainer.addEventListener("click", showList);
 
function showList(e) {
    
    let button = e.target.closest("button");
    
    if ( (button == null) ||
        (!button.classList.contains("active"))) return;
        
    for (let btn of buttons) {
        
        btn.classList.toggle("active");
        let dataClass =  btn.dataset.action;    
        if (!dataClass) return;
        for (let li of li_list) { 
            if (li.children[0].checked) {
                li.classList.toggle(dataClass);

            }
        }
    }
}


function toLocalStorage(){
    let todoes = ul_list.innerHTML;
    localStorage.setItem('todoes', todoes);
}


form.onsubmit = (e) => {

    e.preventDefault();

    const formData = new FormData(form);
    value = Object.fromEntries(formData.entries());
    if(!value.toList) return;

    createToDoLi();

    textInput.value = "";

    toLocalStorage();
}


function createToDoLi() {

    let created_li = document.createElement("li");
    ul_list.append(created_li);
    let x = li_list.length;

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = `id${x}`;
    created_li.append(checkbox);

    let label = document.createElement('label')
    label.htmlFor = `id${x}`;
    label.append(document.createTextNode(value.toList));
    created_li.append(label);

    let deleteLiEl = document.createElement("span");
    deleteLiEl.append(document.createTextNode("x"));
    created_li.append(deleteLiEl);
    // ... to be continued

    
}


if(localStorage.getItem("todoes")) {
    ul_list.innerHTML = localStorage.getItem("todoes");
}