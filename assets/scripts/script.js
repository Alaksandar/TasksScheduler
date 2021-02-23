
let buttonsContainer = document.querySelector(".buttons-container")
let buttons = document.querySelectorAll("button");

let list = document.querySelector(".list-container");
let li_list = document.getElementsByTagName("li");
let ul_list = document.querySelector(".list-container ul");

let form = document.querySelector("form");
let textInput = form.querySelector('input[type="text"]');
let resetInput = document.querySelector('input[type=reset]');
let submit = form.querySelector('input[type="submit"]');



class ShowHideBtn {

    constructor(name) {
        this.name = name;
    }

    showList(e) {

        let button = e.target.closest("button");

        if ((button == null) ||
            (!button.classList.contains("active"))) return;

        for (let btn of buttons) {

            btn.classList.toggle("active");
            let dataClass = btn.dataset.action;
            if (!dataClass) return;
            for (let li of li_list) {
                if (li.children[0].checked) {
                    li.classList.toggle(dataClass);

                }
            }
        }
    }
}

const showHideBtn = new ShowHideBtn();

buttonsContainer.addEventListener("click", ev => {
    showHideBtn.showList(ev);
})


class CreateNewTask {

    constructor(name, checked = false) {
        this.name = name;
        this.checked = checked;
    }


    getValueOnSubmit() {

        const formData = new FormData(form);
        let value = Object.fromEntries(formData.entries());
        if (!value.toList) return;
        textInput.value = "";

        this.render(value.toList);
    }


    render(value) {

        let li = document.createElement("li");
        let x = li_list.length;

        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = this.checked;
        checkbox.id = `${x}`;

        let label = document.createElement('label');
        label.textContent = value;
        label.htmlFor = `${x}`;


        // //  не работает:

        // if (!li.previousElementSibling) {
        //     checkbox.setAttribute('id',  0);
        //     label.setAttribute('for',  0);
        // } else {
        //     checkbox.setAttribute('id', +li.previousElementSibling.firstElementChild.getAttribute('id') + 1);
        //     label.setAttribute('for', +checkbox.getAttribute('id'));
        // }

        let deleteIcon = document.createElement("img");
        deleteIcon.setAttribute('src', './assets/images/icon-close.png');
        deleteIcon.addEventListener('click', remove => {
            li.remove();
            this.toLocalStorage();
        });

        li.append(checkbox);
        li.append(label);
        li.append(deleteIcon);

        ul_list.append(li);


        this.toLocalStorage();
    }


    changeHandler(e) {
        if (e.target.tagName != 'INPUT') {
            return
        } else {
            if (e.target.checked) {
                e.target.setAttribute('checked', true);
            } else {
                e.target.removeAttribute('checked')
            }
            console.log(e.target.checked);
        }
        this.toLocalStorage();
    }

    reload() {
        if (localStorage.getItem("todoes")) {
            ul_list.innerHTML = localStorage.getItem("todoes");
        }
    }

    toLocalStorage() {
        let todoes = ul_list.innerHTML;
        localStorage.setItem('todoes', todoes);


    //     const config = {
    //         attributes: true,
    //         childList: true,
    //         subtree: true,
    //         characterData: true
    //     };
    //     const callback = function (mutationsList, observer) {        
    //         for (let mutation of mutationsList) {
    //             if (mutation.type === "childList") {
    //                 localStorage.setItem("todoes", ul_list.innerHTML);
    //             } else if (mutation.type === "attributes") {
    //                 localStorage.setItem("todoes", ul_list.innerHTML);
    //             } else if (mutation.type === "subtree") {
    //                 localStorage.setItem("todoes", ul_list.innerHTML);
    //             } else if (mutation.type === "characterData") {
    //                 localStorage.setItem("todoes", ul_list.innerHTML);
    //             } 
    //         }
    //     };  
    //     const observer = new MutationObserver(callback);
    //     observer.observe(list, config);
    }

    removeLi(e) {
        li.closest.remove();
        this.toLocalStorage();
    }
}


const task = new CreateNewTask();

form.addEventListener("submit", e => {
    e.preventDefault();
    task.getValueOnSubmit();
})

window.addEventListener("load", e => {
    task.reload();
});


ul_list.addEventListener('click', ev => {
    task.changeHandler(ev);
})