// NAVBAR

let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if(window.scrollY){
        navbar.classList.add("scrolledNav");
    } else {
        navbar.classList.remove("scrolledNav");
    }
})