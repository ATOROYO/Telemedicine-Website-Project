// 'use strict';

// document.addEventListener('DOMContentLoaded', function () {
//   // Toggle Menu Script
//   const menuBtn = document.querySelector('.menu-btn');
//   const menu = document.querySelector('.nav-bar .menu');
//   const icon = document.querySelector('.nav-bar i');

//   if (menuBtn && menu && icon) {
//     menuBtn.addEventListener('click', function () {
//       menu.classList.toggle('active');
//       icon.classList.toggle('active');
//     });
//   }

//   // Dynamic Doctor Selection
//   const specialtyDropdown = document.getElementById('specialtyDropdown');
//   const doctorDropdown = document.getElementById('doctorDropdown');

//   const doctors = {
//     cardiology: ['Dr. John Doe', 'Dr. Jane Smith'],
//     dermatology: ['Dr. Sarah Johnson', 'Dr. Mark Lee'],
//     pediatrics: ['Dr. Emily Brown', 'Dr. Alex White'],
//   };

//   if (specialtyDropdown && doctorDropdown) {
//     specialtyDropdown.addEventListener('change', () => {
//       doctorDropdown.innerHTML = '<option value="">Select Doctor</option>';
//       const selectedSpecialty = specialtyDropdown.value;

//       if (doctors[selectedSpecialty]) {
//         doctors[selectedSpecialty].forEach(doctor => {
//           const option = document.createElement('option');
//           option.value = doctor;
//           option.textContent = doctor;
//           doctorDropdown.appendChild(option);
//         });
//       } else {
//         doctorDropdown.innerHTML =
//           '<option value="">No doctors available for this specialty</option>';
//       }
//     });
//   }

//   // Contact Form Validation
//   const contactForm = document.getElementById('contactForm');
//   if (contactForm) {
//     contactForm.addEventListener('submit', function (e) {
//       e.preventDefault();
//       const name = document.getElementById('name').value.trim();
//       const email = document.getElementById('email').value.trim();
//       const subject = document.getElementById('subject').value.trim();
//       const message = document.getElementById('message').value.trim();

//       if (!name || !email || !subject || !message) {
//         alert('All fields are required!');
//       } else {
//         const successMessage = document.getElementById('successMessage');
//         if (successMessage) {
//           successMessage.style.display = 'block';
//           successMessage.textContent = `Thank you for contacting us, ${name}. We will get back to you shortly.`;
//         }
//         contactForm.reset();
//       }
//     });
//   }

//   // FAQ Script
//   const faqQuestions = document.querySelectorAll('.faq-question');
//   faqQuestions.forEach(question => {
//     const answer = question.nextElementSibling;
//     const toggleIcon = question.querySelector('.toggle-icon');
//     question.addEventListener('click', () => {
//       const isVisible = answer.style.display === 'block';
//       answer.style.display = isVisible ? 'none' : 'block';
//       toggleIcon.textContent = isVisible ? '+' : '-';
//     });
//   });

//   // Mobile Navigation
//   const menuToggle = document.getElementById('menu-toggle');
//   const mobileNav = document.getElementById('mobile-nav');
//   if (menuToggle && mobileNav) {
//     menuToggle.addEventListener('click', function () {
//       mobileNav.classList.toggle('active');
//     });
//   }

//   // Scroll Animation
//   document.addEventListener('scroll', function () {
//     document.querySelectorAll('.fadeIn, .slideIn, .zoomIn').forEach(element => {
//       const position = element.getBoundingClientRect().top;
//       const windowHeight = window.innerHeight;
//       if (position < windowHeight - 50) {
//         element.classList.add('active');
//       }
//     });
//   });

//   // Testimonial Slider
//   function changeSlide(n) {
//     const testimonials = document.querySelectorAll('.testimonial');
//     const currentSlide =
//       document.querySelector('.testimonial.active') || testimonials[0];
//     const currentIndex = Array.from(testimonials).indexOf(currentSlide);
//     const newIndex =
//       (currentIndex + n + testimonials.length) % testimonials.length;

//     currentSlide.classList.remove('active');
//     testimonials[newIndex].classList.add('active');
//   }
// });
