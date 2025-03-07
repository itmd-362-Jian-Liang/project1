document.addEventListener("DOMContentLoaded", function () {
  // Get references to elements
  const optInButton = document.querySelector('.opt-in-btn');
  const benefitsSection = document.querySelector('.benefits');
  const form = document.querySelector('form');
  const addressInput = document.getElementById('address');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const resultsSection = document.createElement('div');
  document.body.appendChild(resultsSection);

  // Regex pattern for address validation
  const addressPattern = /^\d+\s[A-Za-z0-9\s.,#-]+,\s[A-Za-z\s]+,\s[A-Za-z]{2}\s\d{5}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Function to show benefits and form when the opt-in button is clicked
  optInButton.addEventListener('click', function () {
    benefitsSection.style.display = 'block'; // Show benefits section
    form.style.display = 'block';           // Show the form
    optInButton.style.display = 'none';     // Optionally hide the opt-in button after clicking
  });

  // Form submission handler
  form.addEventListener('submit', function (event) {
    // Validate the address input
    if (!addressPattern.test(addressInput.value)) {
      event.preventDefault();
      alert("Please enter a valid address in the format: '123 Main St, City, State 12345'");
      return;
    }

    // Collecting form data
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      address: addressInput.value,
    };

    // Log form results to the console
    console.log('Form Results:', formData);

    // Display the results in the new section
    resultsSection.innerHTML = `
      <h3>Form Submitted Successfully</h3>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Address:</strong> ${formData.address}</p>
    `;

    // Optionally, hide the form and benefits section after submission
    form.style.display = 'none';
    benefitsSection.style.display = 'none';
    optInButton.style.display = 'block'; // Re-show opt-in button after submission
  });

  // Interactive feature: Real-time validation for name and email fields
  nameInput.addEventListener('input', function () {
    if (nameInput.value.length >= 3) {
      nameInput.style.borderColor = 'green';  // Valid name input
    } else {
      nameInput.style.borderColor = 'red';  // Invalid name input
    }
  });

  emailInput.addEventListener('input', function () {
    if (emailPattern.test(emailInput.value)) {
      emailInput.style.borderColor = 'green';  // Valid email input
    } else {
      emailInput.style.borderColor = 'red';  // Invalid email input
    }
  });
});
