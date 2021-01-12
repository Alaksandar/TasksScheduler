
let buttonsContainer = document.querySelector(".buttons-container")
let buttons = document.querySelectorAll("button");
let list = document.querySelector(".list-container");


buttonsContainer.addEventListener("click", selectActiveBtn);    // делегирование
// container.addEventListener("click", showList);    


    function selectActiveBtn(e) {

        let button = e.target.closest("button");       // делегирование
        if ( (button == null) ||
            (!button.classList.contains("active"))) return;

        for (let btn of buttons) {
            btn.classList.toggle("active");     // переключатель class="active" между кнопками

            let dataClass =  btn.dataset.action;    // запись значений из 
            // console.log(dataClass);              // button[data] в 
            list.classList.toggle(dataClass);       // расширение класса div 
            if (!dataClass) return;                 //
            let elems = document.getElementsByClassName(dataClass);
            // console.log(elems);                  // нельзя воспользоваться
            for (let el of elems) {                 // querySelector ?
                // console.log(el)
                if (!el) return;
            }
        }
    }






// for (let btn of buttons) {

//     if (btn.classList.contains("active")) {
//         this.addEventListener("click", btnActive);
//         this.addEventListener("click", showList);
// 	}
//}

//     function btnActive() {
//         for (let btn of buttons) {
//             btn.classList.toggle("active");
//         }
//     }

//     function showList() {
//         list.classList.toggle("show");
//         list.classList.toggle("hide");
//     }

// // 
