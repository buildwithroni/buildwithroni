// Auto-slider for project images
let slideIndex = 0;
const slides = document.querySelectorAll('.project-slider img');

function showSlides() {
  slides.forEach(slide => slide.style.display = 'none');
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3000); // 3 sec per slide
}

if (slides.length > 0) showSlides();

// Contact form to WhatsApp redirect
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const msg = document.getElementById("message").value.trim();

  const whatsappURL = `https://wa.me/916297549389?text=Hi%20Roni,%0AMy%20name%20is%20${encodeURIComponent(name)}.%0A${encodeURIComponent(msg)}`;
  window.open(whatsappURL, '_blank');
});
