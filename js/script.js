document.querySelector('form').addEventListener('submit', function(event) {
    const addressInput = document.getElementById('address');
    const addressPattern = /^\d+\s[A-Za-z0-9\s.,#-]+,\s[A-Za-z\s]+,\s[A-Za-z]{2}\s\d{5}$/;

    if (!addressPattern.test(addressInput.value)) {
        event.preventDefault(); // Prevent form submission
        alert('Please enter a valid address in the format: 123 Main St, City, State 12345');
    }
});