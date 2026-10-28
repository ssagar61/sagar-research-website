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

/* Scientific research slideshow */
document.querySelectorAll(".research-slideshow").forEach((slideshow) => {
  const slides = [...slideshow.querySelectorAll(".research-slide")];
  const dots = [...slideshow.querySelectorAll(".slide-dots button")];
  const counter = slideshow.querySelector(".slide-counter");
  const previous = slideshow.querySelector(".slide-prev");
  const next = slideshow.querySelector(".slide-next");

  let current = 0;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === current);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
      dot.setAttribute("aria-pressed", String(i === current));
    });

    counter.textContent = `${current + 1} / ${slides.length}`;
  }

  previous.addEventListener("click", () => showSlide(current - 1));
  next.addEventListener("click", () => showSlide(current + 1));

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
  });

  showSlide(0);
});
