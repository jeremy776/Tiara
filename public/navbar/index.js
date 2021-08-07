window.addEventListener("scroll", function() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("NewStyleNavbar", window.scrollY > 0);
});

function HamBurger() {
  document.querySelector(".hamburger").classList.toggle("on");
  document.querySelector(".headerList").classList.toggle("on");
  console.log("click")
});
