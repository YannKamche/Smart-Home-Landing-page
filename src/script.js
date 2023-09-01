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

/*-----LIGHT & DARK MODE----*****/

// Icons
const sunIcon = document.getElementById('sun');
const moonIcon = document.getElementById('moon');

// Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon Toggling
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
}

// Initial Theme Check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
}

// Manual Theme Switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};

// Call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
    themeSwitch();
});

moonIcon.addEventListener("click", () => {
    themeSwitch();
});

// invoke theme check on initial load
themeCheck();