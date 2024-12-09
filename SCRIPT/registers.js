// Declaring variable
const divMessage = document.getElementById('message');
const patientSection = document.getElementById('patientSection');
const pFirstNameSpan = document.getElementById('pFirstName');
const pLastNameSpan = document.getElementById('pLastName');
const patientEmail = document.getElementById('pEmail');
const logoutButton = document.getElementById('logoutButton');

function showMessage(type, text) {
  divMessage.style.display = 'block';

  if (type == 'succes') {
    divMessage.style.color = 'green';
  } else {
    divMessage.style.color = 'red';
  }
  divMessage.textContent = text;

  setTimeout(() => {
    divMessage.style.display = 'none';
  }, 3000);
}

// Registration form
document.getElementById('registerForm').addEventListener('submit', async e => {
  e.preventDefault();

  const firstName = document.getElementById('regFirstName').value;
  const lastName = document.getElementById('regLastName').value;
  const email = document.getElementById('regEmail').value;
  const phone = document.getElementById('regPhone').value;
  const password = document.getElementById('regPassword').value;

  //   Transit the data
  const response = await fetch('/telemedicine/api/patient/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, email, phone, password }),
  });

  const result = await response.json();

  if (response.status === 201) {
    showMessage('success', result.message);
  } else {
    showMessage('failed', result.result);
  }
});

// Login form
document.getElementById('loginForm').addEventListener('submit', async e => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginpassword').value;

  //   Transit the data
  const response = await fetch('/telemedicine/api/patients/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const result = await response.json();

  if (response.status === 201) {
    showMessage('success', result.message);
    getPatient();
  } else {
    showMessage('failed', result.result);
  }
});

// Function for fetching user details
async function getPatient() {
  const response = await fetch(
    '/telemedicine/api/patients/patient/patient/update',
    {
      method: 'GET',
    }
  );

  if (response.status === 200) {
    const result = await response.json();
    pFirstNameSpan.textContent = result.patient.firstName;
    pLastNameSpan.textContent = result.patient.lastName;
    patientEmail.textContent = result.patient.email;
    patientSection.style.display = 'block';
  } else {
    showMessage('failed', result.message);
  }
}

// Update patient
document.getElementById('updateForm').addEventListener('submit', async e => {
  e.preventDefault();

  const firstName = document.getElementById('updateFirstName').value;
  const lastName = document.getElementById('updateLastName').value;
  const email = document.getElementById('updateEmail').value;
  const phone = document.getElementById('updatePhone').value;
  const password = document.getElementById('updatePassword').value;

  //   Transit the data
  const response = await fetch('/telemedicine/api/patients/patient/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, email, phone, password }),
  });

  const result = await response.json();

  if (result.status === 200) {
    showMessage('success', result.message);
    getPatient();
  } else {
    showMessage('failed', result.result);
  }
});

// Logout
logoutButton.addEventListener('click', async () => {
  const response = await fetch('/telemedicine/api/patients', {
    method: 'GET',
  });

  if (response.status === 200) {
    const result = response.json();
    showMessage('success', result.message);
    patientSection.style.display = 'none';
  } else {
    showMessage('failed', result.message);
  }
});

// Code for contact form submission
document
  .getElementById('contactForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent traditional form submission

    const formData = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      subject: document.getElementById('subject').value.trim(),
      message: document.getElementById('message').value.trim(),
    };

    try {
      const response = await fetch('/telemedicine/api/patient/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Your message has been submitted successfully.');
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  });

// JavaScript for Frontend Handling News letter
document
  .getElementById('newsletterForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the email value
    const email = document.getElementById('newsletterEmail').value.trim();

    // Validate the email
    if (!email) {
      document.getElementById('newsletterMessage').textContent =
        'Please enter a valid email address.';
      return;
    }

    try {
      // Send the data to the backend
      const response = await fetch('/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        document.getElementById('newsletterMessage').textContent =
          'Thank you for subscribing!';
      } else {
        const error = await response.json();
        document.getElementById('newsletterMessage').textContent = `Error: ${
          error.message || 'Failed to subscribe. Please try again.'
        }`;
      }
    } catch (err) {
      console.error('Error occurred:', err);
      document.getElementById('newsletterMessage').textContent =
        'An unexpected error occurred. Please try again.';
    }
  });

// Front handling of Consultation
document
  .querySelector('.consultation-form form')
  .addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const specialty = document.getElementById('specialty').value;
    const doctor = document.getElementById('doctor').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;

    // Validate input data
    if (
      !name ||
      !email ||
      !phone ||
      !specialty ||
      !doctor ||
      !appointmentDate ||
      !appointmentTime
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      // Send data to the backend
      const response = await fetch('/consultations/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          specialty,
          doctor,
          appointment_date: appointmentDate,
          appointment_time: appointmentTime,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Consultation booked successfully!');
        console.log('Booking Details:', result);
        this.reset(); // Reset the form fields
      } else {
        const error = await response.json();
        alert(`Failed to book consultation: ${error.message}`);
      }
    } catch (err) {
      console.error('An unexpected error occurred:', err);
      alert('An unexpected error occurred. Please try again.');
    }
  });
