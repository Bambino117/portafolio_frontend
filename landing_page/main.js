let menu = document.querySelector("ul");

let bars = document.querySelector(".navbar .fa-bars-staggered");

bars.addEventListener("click", function() {
    menu.classList.toggle("show")
    }
);