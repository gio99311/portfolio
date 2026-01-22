// NAVBAR INTERATTIVA
const navbarLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('#home, #skills, #projects, #contacts, #aboutMe');

// Observer per scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            navbarLinks.forEach(link => {
                link.classList.remove('cust-link');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('cust-link');
                }
            });
            
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

// HEADER - TYPING EFFECT
const text = "< Hello World! >";
const speed = 100;
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("text").textContent += text[i];
    i++;
    setTimeout(type, speed);
  }
}

type();



// ANIMAZIONE BARRE SKILLS
const circularBars = document.querySelectorAll('.circular-bar');
const percentValues = document.querySelectorAll('.percent');
const finalValues = [90, 90, 80, 60, 80, 60, 80]; 

function animateSkillsBars() {

    circularBars.forEach((bar, index) => {
        let initialValue = 0;
        const finalValue = finalValues[index];
        const speed = 10;

        const timer = setInterval(() => {
            initialValue++;

            bar.style.background = `conic-gradient(var(--color-b) ${initialValue * 360 / 100}deg, var(--color-p2) 0deg)`;
            percentValues[index].innerHTML = `${initialValue}%`;

            if (initialValue >= finalValue) {
                clearInterval(timer);
            }
        }, speed);
    });
}

// SKILLS OBSERVER
const skillsSection = document.querySelector('#skills'); 

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillsBars(); 
        }
    });
}, { threshold: 0.3 });

skillsObserver.observe(skillsSection);


// PROGETTI MODAL

