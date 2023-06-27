// mobile menu
const navLinks = document.querySelector('.nav-links');
const navLinksWrapper = document.querySelector('.nav-links-wrapper');
const navBtnMenu = document.querySelector('.nav-btn-menu');
const navBtnX = document.querySelector('.nav-btn-x');
const nav = document.querySelector('nav');
const promoBar = document.querySelector('.promotion-bar');
const promoOverlay = document.querySelector('.promotion-overlay');
const promoWindow = document.querySelector('.promotion-window');
const promoSubscribe = document.querySelector('.promotion-subscribe');
const promoClose = document.querySelector('.promotion-close');

// open nav
navBtnMenu.addEventListener("click", (event) => {
    navBtnX.style.display = "block";
    navBtnMenu.style.display = "none";
    navLinks.classList.add("nav-expanded");
    navLinksWrapper.classList.add("nav-links-fade");
});

// close nav
navBtnX.addEventListener("click", (event) => {
    navBtnX.style.display = "none";
    navBtnMenu.style.display = "block";
    navLinks.classList.remove("nav-expanded");
    navLinksWrapper.classList.remove("nav-links-fade");
});

// parallax effect for hero image
window.addEventListener('scroll', function () {

    const parallax = document.querySelector('.hero-bg');
    let scrollPos = window.pageYOffset;
    if(parallax !== null) parallax.style.transform = 'translateY(' + scrollPos * 0.4 + 'px)';
});

// open promo window
promoBar.addEventListener("click", (event) => {
    promoOverlay.style.display = "block";
    promoWindow.style.display = "flex";
});

// close promo window
promoSubscribe.addEventListener("click", (event) => {
    promoOverlay.style.display = "none";
    promoWindow.style.display = "none";
});

promoClose.addEventListener("click", (event) => {
    promoOverlay.style.display = "none";
    promoWindow.style.display = "none";
});

promoOverlay.addEventListener("click", (event) => {
    promoOverlay.style.display = "none";
    promoWindow.style.display = "none";
});