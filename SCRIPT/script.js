// JavaScript for Toggling Doctor Lists
// function toggleMenu() {
//   const mobileNav = document.querySelector(".mobile-nav");
//   mobileNav.classList.toggle("show");
// }
// Toggle Mobile Navigation Menu
// function toggleMenu() {
//   const menuToggle = document.querySelector(".menu-toggle");
//   if (menuToggle) {
//     menuToggle.classList.toggle("active");

//     const mobileNav = document.querySelector(".mobile-nav");
//     if (mobileNav) {
//       mobileNav.classList.toggle("active");
//     }
//   }
// }

// const menuToggle = document.getElementById("menuToggle");

function showDoctors(specialty) {
  // Hide all doctor lists
  document
    .querySelectorAll(".doctor-list")
    .forEach((list) => (list.style.display = "none"));

  // Show the selected specialty's doctor list
  document.getElementById(specialty).style.display = "block";
}

// JavaScript for Dynamic Doctor Selection in Form
const specialtyDropdown = document.getElementById("specialty");
const doctorDropdown = document.getElementById("doctor");

// Example doctors list
const doctors = {
  cardiology: ["Dr. John Doe", "Dr. Jane Smith"],
  dermatology: ["Dr. Sarah Johnson", "Dr. Mark Lee"],
  pediatrics: ["Dr. Emily Brown", "Dr. Alex White"],
};

specialtyDropdown.addEventListener("change", () => {
  // Clear current doctor options
  doctorDropdown.innerHTML = '<option value="">Select Doctor</option>';

  // Get the selected specialty
  const selectedSpecialty = specialtyDropdown.value;

  // Populate doctor options based on selected specialty
  if (doctors[selectedSpecialty]) {
    doctors[selectedSpecialty].forEach((doctor) => {
      const option = document.createElement("option");
      option.value = doctor;
      option.textContent = doctor;
      doctorDropdown.appendChild(option);
    });
  }
});

// Function for Form Validation for Consultation.html
function validateForm() {
  // Assigning variable to ids
  let isValid = true;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const specialty = document.getElementById("specialty").value;
  const doctor = document.getElementById("doctor").value;
  const date = document.getElementById("appointment-date").value;
  const time = document.getElementById("appointment-time").value;

  // Name validation
  if (name.trim() === "") {
    alert("Name is required.");
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    isValid = false;
  }

  // Phone validation (already done in HTML pattern attribute)
  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    isValid = false;
  }

  // Specialty validation
  if (specialty === "") {
    alert("Please select a specialty.");
    isValid = false;
  }

  // Doctor validation
  if (doctor === "") {
    alert("Please select a doctor.");
    isValid = false;
  }

  // Date validation (ensure date is not in the past)
  const today = new Date().toISOString().split("T")[0];
  if (date < today) {
    alert("Please select a valid appointment date.");
    isValid = false;
  }

  // Time validation
  if (time === "") {
    alert("Please select a valid time for the appointment.");
    isValid = false;
  }

  return isValid;
}

// JavaScript Form Validation error for Consultation.html
function setInvalid(id) {
  document.getElementById(id).classList.add("invalid");
}

function clearErrors() {
  // Clear error messages
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((element) => {
    element.textContent = "";
  });

  // Remove invalid class from inputs
  const inputs = document.querySelectorAll(".form-group input");
  inputs.forEach((input) => {
    input.classList.remove("invalid");
  });
}

console.log("FAQ script loaded"); // To ensure the script file is loaded

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    console.log("Setting up toggle for:", question.textContent);
    question.addEventListener("click", () => {
      console.log("Toggling:", question.textContent);
      const answer = question.nextElementSibling;
      const isVisible = answer.style.display === "block";
      answer.style.display = isVisible ? "none" : "block";
      const toggleIcon = question.querySelector(".toggle-icon");
      toggleIcon.textContent = isVisible ? "+" : "-";
    });
  });
});

// Toggle mobile navigation
document.getElementById("menu-toggle").addEventListener("click", function () {
  const mobileNav = document.getElementById("mobile-nav");
  mobileNav.classList.toggle("active");
});

// Form Validation and Success Message For Contact Page
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  // Simple Validation
  if (name === "" || email === "" || subject === "" || message === "") {
    alert("All fields are required!");
  } else {
    // Display Success Message
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("successMessage").innerHTML =
      "Thank you for contacting us, " +
      name +
      ". We will get back to you shortly.";

    // Clear the form
    document.getElementById("contactForm").reset();
  }
});

// Scroll Animation Trigger
document.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".fadeIn, .slideIn, .zoomIn");
  elements.forEach((element) => {
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 50) {
      element.classList.add("active");
    }
  });
});

/// JavaScript for the Testimonial Slider ///
// JavaScript function to handle slide changes
function changeSlide(n) {
  const testimonials = document.querySelectorAll(".testimonial");
  let currentSlide = document.querySelector(".testimonial.active");
  let currentIndex = Array.from(testimonials).indexOf(currentSlide);
  let newIndex = (currentIndex + n + testimonials.length) % testimonials.length;

  currentSlide.classList.remove("active");
  testimonials[newIndex].classList.add("active");
}
