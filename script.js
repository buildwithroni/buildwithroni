// script.js

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // WhatsApp Redirect
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const service = document.getElementById("service").value;
      const location = document.getElementById("location").value;
      const number = document.getElementById("contact").value;

      const message = `Hello Roni, I am ${name} from ${location}. I am interested in your ${service} service. Please contact me on ${number}.`;
      const whatsappUrl = `https://wa.me/916297549389?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");
    });
  }
});
