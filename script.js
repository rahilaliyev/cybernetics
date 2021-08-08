const hamburgerMenu = document.querySelector(".hamburger");
const ul = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", () => {
  ul.classList.toggle("slide-out");
});
