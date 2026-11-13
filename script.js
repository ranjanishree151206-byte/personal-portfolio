// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function() {

    navbar.classList.toggle("active");

});


// CLOSE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("active");

    });

});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

const statusMessage = document.getElementById("status");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    statusMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    contactForm.reset();

});