window.addEventListener("scroll", function() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("NewStyleNavbar", window.scrollY > 0);
});
