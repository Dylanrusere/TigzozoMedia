// Theme Switching Functionality
document.getElementById("theme_switcher").addEventListener("click", function() {
    document.body.classList.toggle("dark");
  });
// Drop Down Menu for Navigation
  const downIcon = document.querySelector('.downIcon');
  const dropdownMenu = document.querySelector('.dropdown-content');

  downIcon.onclick = function () {
     dropdownMenu.classList.toggle('open')

  }

//   Hamburger menu
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".dropdown_menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});