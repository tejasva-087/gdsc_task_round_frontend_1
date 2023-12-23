// HTML Elements
// Navigation
const navBtnEl = document.querySelector(".nav-bar-btn");
const headerEl = document.querySelector(".nav-bar");

// Functionality
// Navigation
navBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
