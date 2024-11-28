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
