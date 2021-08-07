document.querySelector(".hamburger").addEventListener("click", function() {
  document.querySelector(".hamburger").classList.toggle("on");
  document.querySelector(".headerList").classList.toggle("on");
  console.log("click")
});
  
window.addEventListener("scroll", function() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("NewStyleNavbar", window.scrollY > 0);
});
