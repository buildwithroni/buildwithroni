// Wait for the window to load before hiding the loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0"; // Fade out
    setTimeout(() => loader.style.display = "none", 500); // Hide after animation
});

// Optional: Add a fallback for slow loading
setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
}, 3000); // Hide after 3 seconds if not already hidden
