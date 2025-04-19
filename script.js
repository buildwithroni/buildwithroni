// Optional: Pause sliding on hover
const carousel = document.getElementById("portfolio-carousel");
carousel.addEventListener("mouseover", () => {
  carousel.style.animationPlayState = "paused";
});
carousel.addEventListener("mouseout", () => {
  carousel.style.animationPlayState = "running";
});
