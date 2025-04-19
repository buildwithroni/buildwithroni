// Loader
window.addEventListener("load", () => {
  document.querySelector(".loader-wrapper").style.display = "none";
});

// Hamburger toggle
document.querySelector(".hamburger").addEventListener("click", () => {
  const menu = document.querySelector(".mobile-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Optional typing effect (for your tagline)
const typingText = [
  "Based in India | Contact Now for a Free Custom Quote"
];
let lineIndex = 0;
let charIndex = 0;

function typeWriter() {
  const tag = document.querySelector(".hero p:last-child");
  if (!tag) return;

  if (charIndex < typingText[lineIndex].length) {
    tag.textContent += typingText[lineIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 60);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);
