document.addEventListener("DOMContentLoaded", function () {
  // Get references to elements
  const optInButton = document.querySelector('.opt-in-btn');
  const benefitsSection = document.querySelector('.benefits');
  const form = document.querySelector('form');
  const addressInput = document.getElementById('address');
  
  // Regex pattern for address validation
  const addressPattern = /^\d+\s[A-Za-z0-9\s.,#-]+,\s[A-Za-z\s]+,\s[A-Za-z]{2}\s\d{5}$/;

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
      event.preventDefault(); // Prevent form submission if address is invalid
      alert("Please enter a valid address in the format: '123 Main St, City, State 12345'");
    }
  });
});
