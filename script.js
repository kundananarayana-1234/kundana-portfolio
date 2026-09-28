// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});



// ================= CLOSE MOBILE MENU =================

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

        });

    });



// ================= SCROLL ANIMATION =================

const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.12
        }

    );



const animatedElements = document.querySelectorAll(

    ".hero-content, " +
    ".hero-card, " +
    ".section-title, " +
    ".about-text, " +
    ".education-card, " +
    ".skill-card, " +
    ".project-card, " +
    ".timeline-item, " +
    ".coding-card, " +
    ".contact-content"

);



animatedElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});



// ================= FOOTER YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();