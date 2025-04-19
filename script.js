// Loader functionality
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    loader.style.display = "none"; // Hide the loader after page loads
});

// Carousel functionality
let currentSlide = 0;

const slides = document.querySelectorAll(".carousel .slide");
const totalSlides = slides.length;

function showSlide(index) {
    const offset = -index * 100;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

setInterval(function() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 3000); // Auto-scroll every 3 seconds
