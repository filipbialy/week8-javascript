/* ==========================================================
   JavaScript checkpoint 01: theme switch
   ========================================================== */

// 1. Find the parts of the page we need
const page = document.documentElement; // the <html> element
const themeSwitch = document.querySelector(".theme-switch");

// 2. Show a theme: set it on the page and update the button
function showTheme(theme) {
  page.setAttribute("data-theme", theme);
  themeSwitch.setAttribute("aria-pressed", theme === "dark");
}

// 3. Choose the starting theme: the visitor's saved choice,
//    or the system setting if nothing has been saved yet
let theme = localStorage.getItem("theme");

if (theme === null) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme = "dark";
  } else {
    theme = "light";
  }
}

showTheme(theme);

// 4. When the button is clicked, switch the theme and remember it
themeSwitch.addEventListener("click", function () {
  if (theme === "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }

  showTheme(theme);
  localStorage.setItem("theme", theme);
});
