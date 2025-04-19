// Typing Effect
const typingText = "Transforming ideas into stunning, high-converting websites that grow your brand and business.";
let index = 0;
const typingElement = document.createElement("p");
typingElement.className = "typing-text";
document.querySelector(".hero").appendChild(typingElement);

function typeWriter() {
  if (index < typingText.length) {
    typingElement.textContent += typingText.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Section Fade-in
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});
