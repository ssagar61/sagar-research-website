const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const themeToggle = document.querySelector("#themeToggle");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "Close ✕" : "Menu ☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "Menu ☰";
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const darkModeOn = document.body.classList.contains("dark");
  themeToggle.setAttribute("aria-label", darkModeOn ? "Switch to light mode" : "Switch to dark mode");
});

document.querySelector("#year").textContent = new Date().getFullYear();
