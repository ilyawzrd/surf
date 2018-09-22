const hamburger = document.querySelector(".mobileNav");
const desktopMenu = document.querySelector(".desktopNav");
const scrollTo = document.querySelector(".scrollDestination");
const scrollButton = document.querySelector(".scroll");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  desktopMenu.classList.toggle("show");
}

scrollButton.addEventListener("click", scroll);
function scroll() {
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
