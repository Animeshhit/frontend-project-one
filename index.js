const navbar = document.querySelector(".navbar_left");
const navbarIcons = document.querySelector(".navbar_menu");

navbarIcons.addEventListener("click", () => {
  navbar.classList.toggle("navbar_show");
});
