"use strict";

// making the navigation bar stick while scroling
let navbar = document.getElementById("nav-bar");
let menu = document.getElementById("menue");
window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}

// slide effect 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
  
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((a) => observer.observe(a)); 


window.addEventListener('scroll', fadeIn);

fadeIn(); // Call the function immediately when the script is loaded

function fadeIn() {
    var elements = document.querySelectorAll('.fade-in-section');
    for (var i = 0; i < elements.length; i++) {
        var bounding = elements[i].getBoundingClientRect();

        if ((bounding.top <= (window.innerHeight || document.documentElement.clientHeight)) && bounding.bottom > 0) {
            elements[i].classList.add('fade-in');
        } else {
            elements[i].classList.remove('fade-in');
        }
    }
}

function toggleOverlay(element) {
    var overlay = element.previousElementSibling;
    overlay.style.height = overlay.style.height === '0px' ? '100%' : '0px';
}
