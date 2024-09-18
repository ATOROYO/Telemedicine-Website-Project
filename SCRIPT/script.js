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
}
