


// Hamburger Icon to full page vertical nav

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener("click", () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open');
    });
});


//Scroll to top button

//Grab the button

const btn = document.querySelector(".btn-to-top");

//When user scrolls down 20px from top of page show button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

//When user clicks the button, scroll to the top of the page
btn.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0; //For safari
    document.documentElement.scrollTop = 0; //for Chrome, Firefox, IE, and Opera
}

