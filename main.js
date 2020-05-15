//Make NavBar transparent when it is on the top
const navbar = document.getElementById("navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", changeNavBgColor);

function changeNavBgColor() {
  window.scrollY > navbarHeight
    ? navbar.classList.add("navbar--dark")
    : navbar.classList.remove("navbar--dark");
}
