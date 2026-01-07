// NAVBAR INTERATTIVA
const navbarLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('#home, #skills');

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

