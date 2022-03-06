/*scroll bar*/

let progress = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset /
        totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

/* TRANSITION */

AOS.init({
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000 // values from 0 to 3000, with step 50ms
});

/* QUANTITY COUNTER */

let incrementButton = document.getElementsByClassName('inc');
let decrementButton = document.getElementsByClassName('dec');

//INCREMENT
for (let i = 0; i < incrementButton.length; i++) {
    let button = incrementButton[i];
    button.addEventListener('click', function (event) {
        let buttonClicked = event.target;
        let input = buttonClicked.parentElement.children[2];
        let inputValue = input.value;
        let newValue = parseInt(inputValue) + 1;
        input.value = newValue;
    })
}

//DECREMENT
for (let i = 0; i < decrementButton.length; i++) {
    let button = decrementButton[i];
    button.addEventListener('click', function (event) {
        let buttonClicked = event.target;
        let input = buttonClicked.parentElement.children[2];
        let inputValue = input.value;
        let newValue = parseInt(inputValue) - 1;
        if (newValue >= 0) {
            input.value = newValue;
        }
    })
}



/* SEARCH BAR */

const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
icon.onclick = function(){
    search.classList.toggle('active')
}


