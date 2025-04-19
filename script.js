// Typing Effect
const typingText = ["Full-Stack Web Developer", "Frontend + Backend", "Stunning Websites", "Brand Portfolios"];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.createElement("p");
document.querySelector(".hero").appendChild(typingElement);

function type() {
  if (charIndex < typingText[textIndex].length) {
    typingElement.textContent += typingText[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = typingText[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % typingText.length;
    setTimeout(type, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Scroll Fade In Animation
const observer = new IntersectionObserver(entries => {
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

// Smooth Scroll for Navigation
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// Loader Hide on Load
window.addEventListener("load", () => {
  document.querySelector(".loader-wrapper").style.display = "none";
});
