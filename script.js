const navBtnEl = document.querySelector(".nav-bar-btn");
const headerEl = document.querySelector(".nav-bar");

navBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  console.log("clicked");
});
