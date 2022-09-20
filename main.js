

//Sticky Navbar

//When the user scrolls the page, execute stickyFunction
window.onscroll = function() {stickyFunction()};

//Get the header
const header = document.getElementById("header");

//Get the offset position of the header
const sticky = header.offsetTop;

//Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
    if(window.pageYOffset >= sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky");
    }
}


//Menu Icon

const nav = document.querySelector(".nav");
const container = document.querySelector(".container");

function myFunction(x) {
    x.classList.toggle("change");
   nav.classList.toggle("show");
   container.classList.toggle("active");
}


