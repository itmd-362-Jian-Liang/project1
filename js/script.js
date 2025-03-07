document.addEventListener("DOMContentLoaded", function() {
    // Show benefits section and form when "Opt In & Learn More" button is clicked
    const optInButton = document.querySelector('.opt-in-btn');
    const benefitsSection = document.querySelector('.benefits');
    const form = document.querySelector('form');

    optInButton.addEventListener('click', function() {
        benefitsSection.style.display = 'block'; // Show benefits section
        form.style.display = 'block'; // Show the form
    });

    // Address validation on form submission
    form.addEventListener('submit', function(event) {
        const addressInput = document.getElementById('address');
        const addressPattern = /^\d+\s[A-Za-z0-9\s.,
		});
		
		// Wait for the DOM to be fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    const optInBtn = document.querySelector('.opt-in-btn');
    const benefitsSection = document.querySelector('.benefits');
    const formSection = document.querySelector('form');

    // Add event listener to the opt-in button
    optInBtn.addEventListener('click', function() {
        // Toggle the display of the benefits section and form
        benefitsSection.style.display = 'block';
        formSection.style.display = 'block';
        optInBtn.style.display = 'none';  // Hide the opt-in button after clicking
    });
});
