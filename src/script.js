const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('#menubar');
const menuBtn = document.querySelector('.menu-btn');
const xmarkBtn = document.querySelector('.xmark-btn');

navBtn.addEventListener('click', () => {
    menuBar.classList.toggle('hidden');
    menuBar.classList.toggle('flex');
    menuBtn.classList.toggle('hidden');
    xmarkBtn.classList.toggle('hidden');

})

xmarkBtn.addEventListener('click', () => {
    menuBar.classList.toggle('hidden');
    menuBar.classList.toggle('flex');
    menuBtn.classList.toggle('hidden');
    xmarkBtn.classList.toggle('hidden');
})