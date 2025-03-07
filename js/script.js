document.addEventListener("DOMContentLoaded", function() {
    // Show benefits section and form when "Opt In & Learn More" button is clicked
    const optInButton = document.querySelector('.opt-in-btn');
    const benefitsSection = document.querySelector('.benefits');
    const form = document.querySelector('form');

    optInButton.addEventListener('click', function() {
        benefitsSection.style.display = 'block'; // Show benefits section
        form.style.display = 'block';              // Show the form
        optInButton.style.display = 'none';        // Optionally hide the button after clicking
    });

    // Address validation on form submission
    form.addEventListener('submit', function(event) {
        const addressInput = document.getElementById('address');
        // Regex pattern: matches "123 Main St, City, ST 12345"
        const addressPattern = /^\d+\s[A-Za-z0-9\s.,#-]+,\s[A-Za-z\s]+,\s[A-Za-z]{2}\s\d{5}$/;
        if (!addressPattern.test(addressInput.value)) {
            event.preventDefault(); // Prevent form submission if address is invalid
            alert("Please enter a valid address in the format: '123 Main St, City, ST 12345'");
        }
    });
});
