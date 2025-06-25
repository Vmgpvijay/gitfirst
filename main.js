
  (function () {
    'use strict';

    // Get the form element
    const form = document.getElementById('contactForm');

    // Listen for submit event
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Always prevent default form submit for demo

      if (!form.checkValidity()) {
        // If form is invalid, stop submit & show Bootstrap styles
        event.stopPropagation();
      } else {
        // If form is valid: show custom success, clear form
        alert('Thank you! Your message has been sent.');
        form.reset(); // Clear the fields
        form.classList.remove('was-validated'); // Reset validation style
      }

      // Add Bootstrap validation styling
      form.classList.add('was-validated');
    }, false);

  })();