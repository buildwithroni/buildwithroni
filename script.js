// script.js

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const skillBoxes = document.querySelectorAll('.skill-box');

  // Toggle mobile menu
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - (document.querySelector('.site-header')?.offsetHeight || 0), // Adjust for fixed header
          behavior: "smooth"
        });
        // Close mobile menu after clicking
        if (mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
        }
      }
    });
  });

  // WhatsApp Redirect (Corrected to use form submission)
  const contactForm = document.querySelector(".contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameInput = document.getElementById("name");
      const serviceSelect = document.getElementById("service");
      const locationInput = document.getElementById("location");
      const phoneInput = document.getElementById("phone");

      const name = nameInput ? nameInput.value : '';
      const service = serviceSelect ? serviceSelect.value : '';
      const location = locationInput ? locationInput.value : '';
      const phone = phoneInput ? phoneInput.value : '';

      const message = `Hello Roni, I am ${name} from ${location}. I am interested in your ${service} service. Please contact me on ${phone}.`;
      const whatsappUrl = `https://wa.me/916297549389?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");
    });
  }

  // Skills click functionality
  skillBoxes.forEach(box => {
    box.addEventListener('click', function() {
      this.classList.toggle('clicked');
    });
  });
});
