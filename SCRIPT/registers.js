'use strict';

// Utility function to show messages
function showMessage(type, text) {
  const divMessage = document.getElementById('message');
  divMessage.style.display = 'block';
  divMessage.style.color = type === 'success' ? 'green' : 'red';
  divMessage.textContent = text;

  setTimeout(() => {
    divMessage.style.display = 'none';
  }, 3000);
}

// Utility function for form validation
function validateFields(fields) {
  return fields.every(field => field.trim() !== '');
}

// Handle form submissions
async function handleSubmit(url, data, successCallback) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      showMessage('success', result.message);
      if (successCallback) successCallback(result);
    } else {
      showMessage('failed', result.message || 'An error occurred.');
    }
  } catch (err) {
    console.error('An unexpected error occurred:', err);
    showMessage('failed', 'An unexpected error occurred. Please try again.');
  }
}

// Registration form
document.getElementById('registerForm').addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    firstName: document.getElementById('regFirstName').value,
    lastName: document.getElementById('regLastName').value,
    email: document.getElementById('regEmail').value,
    phone: document.getElementById('regPhone').value,
    password: document.getElementById('regPassword').value,
  };

  if (!validateFields(Object.values(data))) {
    return showMessage('failed', 'Please fill in all required fields.');
  }

  handleSubmit('/register', data);
});

// Login form
document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    email: document.getElementById('loginEmail').value,
    password: document.getElementById('loginpassword').value,
  };

  if (!validateFields(Object.values(data))) {
    return showMessage('failed', 'Please fill in all required fields.');
  }

  handleSubmit('/telemedicine/api/patients/login', data, getPatient);
});

// Fetch patient details
async function getPatient() {
  try {
    const response = await fetch('/telemedicine/api/patients/patient/update', {
      method: 'GET',
    });

    if (response.ok) {
      const { patient } = await response.json();
      document.getElementById('pFirstName').textContent = patient.firstName;
      document.getElementById('pLastName').textContent = patient.lastName;
      document.getElementById('pEmail').textContent = patient.email;
      document.getElementById('patientSection').style.display = 'block';
    } else {
      showMessage('failed', 'Failed to fetch patient details.');
    }
  } catch (err) {
    console.error('Error fetching patient details:', err);
    showMessage('failed', 'An error occurred while fetching details.');
  }
}

// Logout
document.getElementById('logoutButton').addEventListener('click', async () => {
  try {
    const response = await fetch('/telemedicine/api/patients/logout', {
      method: 'GET',
    });

    const result = await response.json();
    if (response.ok) {
      showMessage('success', result.message);
      document.getElementById('patientSection').style.display = 'none';
    } else {
      showMessage('failed', result.message || 'Logout failed.');
    }
  } catch (err) {
    console.error('Logout error:', err);
    showMessage('failed', 'An unexpected error occurred.');
  }
});

// Newsletter subscription
document.getElementById('newsletterForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value.trim();

  if (!email) {
    return showMessage('failed', 'Please enter a valid email address.');
  }

  handleSubmit('/newsletter/subscribe', { email });
});

// General validation for consultations and contact forms
function handleFormSubmission(event, url, data) {
  event.preventDefault();
  if (!validateFields(Object.values(data))) {
    return showMessage('failed', 'Please fill in all required fields.');
  }
  handleSubmit(url, data);
}
