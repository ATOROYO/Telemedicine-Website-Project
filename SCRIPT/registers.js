// Declaring variable
const divMessage = document.getElementById("message");
const patientSection = document.getElementById("patientSection");
const pFirstNameSpan = document.getElementById("pFirstName");
const pLastNameSpan = document.getElementById("pLastName");
const patientEmail = document.getElementById("pEmail");
const logoutButton = document.getElementById("logoutButton");

function showMessage(type, text) {
  divMessage.style.display = "block";

  if (type == "succes") {
    divMessage.style.color = "green";
  } else {
    divMessage.style.color = "red";
  }
  divMessage.textContent = text;

  setTimeout(() => {
    divMessage.style.display = "none";
  }, 3000);
}

// Registration form
document
  .getElementById("registerForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstName = document.getElementById("regFirstName").value;
    const lastName = document.getElementById("regLastName").value;
    const email = document.getElementById("regEmail").value;
    const phone = document.getElementById("regPhone").value;
    const password = document.getElementById("regPassword").value;

    //   Transit the data
    const response = await fetch("/telemedicine/api/patient/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, phone, password }),
    });

    const result = await response.json();

    if (response.status === 201) {
      showMessage("success", result.message);
    } else {
      showMessage("failed", result.result);
    }
  });

// Login form
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginpassword").value;

  //   Transit the data
  const response = await fetch("/telemedicine/api/patients/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const result = await response.json();

  if (response.status === 201) {
    showMessage("success", result.message);
    getPatient();
  } else {
    showMessage("failed", result.result);
  }
});

// Function for fetching user details
async function getPatient() {
  const response = await fetch(
    "/telemedicine/api/patients/patient/patient/update",
    {
      method: "GET",
    }
  );

  if (response.status === 200) {
    const result = await response.json();
    pFirstNameSpan.textContent = result.patient.firstName;
    pLastNameSpan.textContent = result.patient.lastName;
    patientEmail.textContent = result.patient.email;
    patientSection.style.display = "block";
  } else {
    showMessage("failed", result.message);
  }
}

// Update patient
document.getElementById("updateForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const firstName = document.getElementById("updateFirstName").value;
  const lastName = document.getElementById("updateLastName").value;
  const email = document.getElementById("updateEmail").value;
  const phone = document.getElementById("updatePhone").value;
  const password = document.getElementById("updatePassword").value;

  //   Transit the data
  const response = await fetch("/telemedicine/api/patients/patient/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName, email, phone, password }),
  });

  const result = await response.json();

  if (result.status === 200) {
    showMessage("success", result.message);
    getPatient();
  } else {
    showMessage("failed", result.result);
  }
});

// Logout
logoutButton.addEventListener("click", async () => {
  const response = await fetch("/telemedicine/api/patients", {
    method: "GET",
  });

  if (response.status === 200) {
    const result = response.json();
    showMessage("success", result.message);
    patientSection.style.display = "none";
  } else {
    showMessage("failed", result.message);
  }
});

// Code for contact form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent traditional form submission

    const formData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      subject: document.getElementById("subject").value.trim(),
      message: document.getElementById("message").value.trim(),
    };

    try {
      const response = await fetch("/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Your message has been submitted successfully.");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  });
