
let buttonsContainer = document.querySelector(".buttons-container")
let buttons = document.querySelectorAll("button");
let list = document.querySelector(".list-container");


buttonsContainer.addEventListener("click", showList);// делегирование
    

function showList(e) {

        let button = e.target.closest("button");    // делегирование
        if ( (button == null) ||
            (!button.classList.contains("active"))) return;

        for (let btn of buttons) {
            btn.classList.toggle("active");         // переключатель class="active" между кнопками

            let dataClass =  btn.dataset.action;    // запись значений из 
            // console.log(dataClass);              // button[data] в 
            list.classList.toggle(dataClass);       // расширение класса div 
            // console.log(list.classList)
            if (!dataClass) return;                 
        }
    }