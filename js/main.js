


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


//Modal Popup
const modal = document.getElementById('modal');
const modalX = document.getElementById('modal-close-btn');
const cookieForm = document.getElementById('cookie-form');
const modalText = document.getElementById('modal-text');
const quizButtonTop = document.getElementById('btn__style-quiz-top');
const quizButtonBottom = document.getElementById('btn__style-quiz-bottom');

//sets a delay of 1.5 seconds before the modal pops up
quizButtonTop.addEventListener('click', function(){
    modal.style.display = "inline";
})

quizButtonBottom.addEventListener('click', function() {
    modal.style.display = "inline";
})

//Closes modal when you click the X 
modalX.addEventListener('click', function() {
    modal.style.display = "none";
});

//Prevents reloading of form when it is closed and changes text inside HTML
cookieForm.addEventListener('submit', function(e){
    e.preventDefault();

    const cookieFormData = new FormData(cookieForm);

    const name = cookieFormData.get('fullName');


    document.getElementById('modal-inner').innerHTML = `
    <div class="modal-inner-after">
    <h2>Thanks for signing up <span class="modal-display-name">${name}</span>!</h2>
    <p>You are one step closer to amazing style. Your style quiz is headed to your inbox right now!</p>
    <div style="width:100%;height:0;padding-bottom:100%;position:relative;">
    <iframe src="https://giphy.com/embed/artj92V8o75VPL7AeQ" width="70%" height="70%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </div>
    </div>
  
    `
  
});


