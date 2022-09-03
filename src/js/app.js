import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const burgerMenu = document.querySelector(".burger-menu");
burgerMenu.addEventListener("click", onBurgerMenu);

function onBurgerMenu(e) {
  e.preventDefault();
  const nav = document.querySelector(".nav");
  const navList = document.querySelector(".nav__list");
  const menuBox = document.querySelector("#menu_checkbox");
  nav.classList.toggle("active");
  navList.classList.toggle("active");
  menuBox.classList.toggle("active");
}
