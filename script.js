document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu Toggle
  const hamburger = document.getElementById("hamburger-icon");
  hamburger.addEventListener("click", () => {
    const menu = document.querySelector(".hamburger-menu");
    menu.classList.toggle("active");
  });

  // Section Slide-in Animation
  const sections = document.querySelectorAll(".section");
  sections.forEach((section, index) => {
    section.style.transform = "translateX(100px)";
    section.style.opacity = "0";
    setTimeout(() => {
      section.style.transform = "translateX(0)";
      section.style.opacity = "1";
    }, index * 300);
  });
});
