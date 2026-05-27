let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");

  menuIcon.classList.toggle("fa-xmark");
};

// Active navbar links

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {

  sections.forEach(sec => {

    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if(top >= offset && top < offset + height){

      navLinks.forEach(links => {
        links.classList.remove("active");
      });

      document.querySelector(".navbar a[href*=" + id + "]")
      .classList.add("active");

    }

  });

  navbar.classList.remove("active");
  menuIcon.classList.remove("fa-xmark");

};

// Order buttons

let orderButtons = document.querySelectorAll(".menu-card button");

orderButtons.forEach(button => {

  button.addEventListener("click", () => {
    alert("Order Placed Successfully 🍴");
  });

});