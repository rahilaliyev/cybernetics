const hamburgerMenu = document.querySelector(".hamburger");
const ul = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", () => {
  ul.classList.toggle("slide-out");
});

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 500) {
    document.querySelector("body nav").classList.add("active");
  } else {
    document.querySelector("body nav").classList.remove("active");
  }
});

window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += "hidden";
});
