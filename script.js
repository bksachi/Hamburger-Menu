// Selecting Elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Toggle Menu on Click
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
