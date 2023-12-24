// *****************
// HTML Elements
// *****************
// Navigation
const navBtnEl = document.querySelector('.nav-bar-btn');
const headerEl = document.querySelector('.nav-bar');

// Accordian
const accordianEl = document.querySelectorAll('.accordian-box');

// *****************
// Functionality
// *****************
// Navigation
navBtnEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});
// Accordian
accordianEl.forEach(val => {
  val.addEventListener('click', function () {});
});
