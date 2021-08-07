window.addEventListener("scroll", function() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("NewStyleNavbar", window.scrollY > 0);
});

window.addEventListener("load", function() {

  document.onclick = (element) => {
    if(element.target.class !== "hamburger") {
      document.querySelector(".hamburger").classList.remove("on");
      document.querySelector(".headerList").classList.remove("on");
    }
  }

  document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".hamburger").classList.toggle("on");
    document.querySelector(".headerList").classList.toggle("on");
    console.log("click")
  });
});
