// script.js

// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Contact Form
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
  e.preventDefault();

  alert("Message Sent Successfully!");

  form.reset();
});

// Buy Buttons
const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Product added to cart!");
  });
});