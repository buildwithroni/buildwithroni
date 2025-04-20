document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const navLinks = document.querySelectorAll('.mobile-nav a');
  const skillBoxes = document.querySelectorAll('.skill-box');
  const carousels = document.querySelectorAll('.carousel');
  const sections = document.querySelectorAll('.reveal');

  // Toggle mobile menu
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });

    // Close mobile menu on nav link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });

    // Close mobile menu on outside click
    document.addEventListener('click', function(event) {
      const isClickInside = mobileMenu.contains(event.target) || menuToggle.contains(event.target);
      if (!isClickInside && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
      }
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
          top: targetElement.offsetTop - (document.querySelector('.site-header')?.offsetHeight || 0),
          behavior: "smooth"
        });
        // Close mobile menu after clicking
        if (mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
        }
      }
    });
  });

  // WhatsApp Redirect
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

      const message = `Enquiry from website:\nName: ${name}\nService: ${service}\nLocation: ${location}\nContact: ${phone}`;
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

  // Scroll reveal animation (Slower)
  function revealSection() {
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const revealPoint = 100; // Adjust for when the reveal happens

      if (top < windowHeight - revealPoint) {
        section.classList.add('reveal');
      } else {
        section.classList.remove('reveal'); // Allows for re-revealing on scroll up
      }
    });
  }

  window.addEventListener('scroll', revealSection);
  revealSection(); // Initial call

  // Basic responsiveness for aspect ratio (more complex solutions might require libraries or more detailed JS)
  function adjustLayout() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    // You can add more specific adjustments based on different aspect ratio ranges if needed.
    // For example:
    // if (aspectRatio < 0.9) { // Portrait mode
    //   document.body.classList.add('portrait');
    //   document.body.classList.remove('landscape');
    // } else { // Landscape mode
    //   document.body.classList.add('landscape');
    //   document.body.classList.remove('portrait');
    // }
  }

  window.addEventListener('resize', adjustLayout);
  adjustLayout(); // Initial call
});
