const hamburgerMenu = document.querySelector(".hamburger");
const ul = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", () => {
  ul.classList.toggle("slide-out");
});

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 100) {
    document.querySelector("body nav").classList.add("active");
  } else {
    document.querySelector("body nav").classList.remove("active");
  }
});
