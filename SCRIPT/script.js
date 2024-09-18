// Script fot the toggle button / Toggle functionality
function toggleMenu() {
  const nav = document.querySelector(".mobile-nav");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
}

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
}
