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

// JQuer function
$(document).ready(function () {
  $(window).scroll(function () {
    // Sticky nav
    if (this.scrollY > 20) {
      $(".nav-bar").addClass("sticky");
    } else {
      $(".nav-bar").removeClass("sticky");
    }
    if (this.scroll > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
});

// JavaScript to handle the FAQ toggling (in your new.js file):
document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const isActive = question.classList.contains("active");

      // Close all answers
      document.querySelectorAll(".faq-answer").forEach((ans) => {
        ans.style.maxHeight = null;
      });
      document.querySelectorAll(".faq-question").forEach((q) => {
        q.classList.remove("active");
      });

      // Toggle current answer
      if (!isActive) {
        question.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
