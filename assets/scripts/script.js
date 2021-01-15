
let buttonsContainer = document.querySelector(".buttons-container")
let buttons = document.querySelectorAll("button");
let list = document.querySelector(".list-container");
let li_list = document.querySelectorAll("li");

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