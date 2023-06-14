const nav = document.querySelector("#nav-links");
const navBtn = document.querySelector("#nav-btn");
const backToTopBtn = document.querySelector("#back-to-top");

navBtn.addEventListener("click", (event) => {
    if (nav.classList.contains("nav-expanded")) {
        nav.classList.remove("nav-expanded");
    } else {
        nav.classList.add("nav-expanded");
    }
});

window.onscroll = function() {
    if (window.scrollY > 500) {
        backToTopBtn.style.opacity = "1";
    } else {
        backToTopBtn.style.opacity = "0";
    }
};

