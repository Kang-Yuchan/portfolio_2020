//Make NavBar transparent when it is on the top
const navbar = document.getElementById("navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", changeNavBgColor);

function changeNavBgColor() {
  window.scrollY > navbarHeight
    ? navbar.classList.add("navbar--dark")
    : navbar.classList.remove("navbar--dark");
}

//Handle scrolling when tapping on the navbar menu and contact me button
const navbarMenu = document.querySelector(".navbar__menu");
const contactBtn = document.querySelector(".home__contactBtn");

navbarMenu.addEventListener("click", scrollToSection);
contactBtn.addEventListener("click", scrollToSection);

function scrollToSection(e) {
  const target = e.target;
  const link = target.dataset.link;
  const scroll = document.querySelector(link);

  if (link) {
    scroll.scrollIntoView({
      behavior: "smooth",
    });
  }
}

//Make Home section transparent when it is scrolled to top
const home = document.getElementById("home");
const homeContainer = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", changeHomeFade);

function changeHomeFade() {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
}
