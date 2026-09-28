// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


// CLOSE MENU AFTER CLICK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });

});


// SCROLL ANIMATION

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.15
    }
);


document.querySelectorAll(
    ".hero-content, .hero-card, .section-title, .about-text, .education-card, .skill-card, .project-card, .timeline-item, .coding-card, .contact-content"
).forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();