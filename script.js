// HTML Elements
// Navigation
const navButtonEl = document.querySelector(".nav-bar-btn");
const headerEl = document.querySelector(".nav-bar");

// Functionality
// Navigation
navButtonEl.addEventListener("click", function () {
  headerEl.classList.add(".nav-open");
  console.log(headerEl.classList);
});
