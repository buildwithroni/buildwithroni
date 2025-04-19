// Loader hide after page load
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

// Toggle Menu (mobile)
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}
