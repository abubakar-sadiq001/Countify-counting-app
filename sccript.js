'use strict';

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('increase').addEventListener('click', increaseCount);
document.getElementById('decrease').addEventListener('click', decreaseCount);

let outputEl = document.querySelector('.output');
let counter = 0;

function increaseCount() {
    outputEl.textContent = counter+=1;
}

function decreaseCount() {
    console.log('decreasing');
    outputEl.textContent = counter-=1;
    
}

document.getElementById('menu-bar').addEventListener('click', openBar);
const sideBar = document.querySelector('.side-bar');

function openBar() {
    sideBar.classList.toggle('side-bar');
}
})