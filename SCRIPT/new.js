document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");

  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active"); // Toggle the 'active' class on the button
  });
});

let currentSlide = 0;

function showSlide(index) {
  const testimonials = document.querySelectorAll(".testimonial");
  if (index >= testimonials.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = testimonials.length - 1;
  } else {
    currentSlide = index;
  }

  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove("active");
    if (i === currentSlide) {
      testimonial.classList.add("active");
    }
  });
}

function changeSlide(step) {
  showSlide(currentSlide + step);
}

// Auto-slide every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 5000);

// Initialize the first slide
showSlide(currentSlide);
