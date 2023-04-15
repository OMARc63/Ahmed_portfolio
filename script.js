/* ***************** toggle menu navbar **************** */
let menuIcon = document.getElementById("menu_icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("show");
};

/* **************** scroll navbar active links ****************** */
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /* *************** sticky navbar ******************* */
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 150);

  /* ************ remove toggle icon and navbar when click on navlink */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("show");
};

/* *************** scroll reveal navbar ******************* */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home_content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home_img, .services_container, .projects_box, .contact form",
  {
    origin: "bottom",
  }
);

ScrollReveal().reveal(".home_content h1, .about_img", { origin: "left" });
ScrollReveal().reveal(".home_content p, .about_content", { origin: "right" });

/* *************** scroll reveal navbar ******************* */
const typed = new Typed(".multiple_text", {
  strings: ["Frontend Developer", "Youtuber", "Blogger"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
