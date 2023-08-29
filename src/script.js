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

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");

    this.scrollY >= 350 
    ? scrollUp.classList.add("show-scroll") 
    : scrollUp.classList.remove("show-scroll");
}

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

const scrollHeader = () => {
    const navBar = document.getElementById("navbar");

    this.scrollY >= 30 
    ? navBar.classList.add("bg-header") 
    : navBar.classList.remove("bg-header"); 
}
window.addEventListener("scroll", scrollHeader);