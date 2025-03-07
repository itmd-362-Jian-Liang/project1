document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const optInButton = document.querySelector(".opt-in-btn");
    const benefitsSection = document.querySelector(".benefits");
    const form = document.querySelector("form");
    const submitButton = document.querySelector("form button[type='submit']");

    // Initially hide benefits and form
    benefitsSection.style.display = "none";
    form.style.display = "none";

    // Header Animation on hover/touch
    header.addEventListener("mouseenter", () => {
        header.style.transition = "transform 0.3s ease-in-out";
        header.style.transform = "scale(1.05)";
    });

    header.addEventListener("mouseleave", () => {
        header.style.transform = "scale(1)";
    });

    // Show benefits section when "Opt In" is clicked
    optInButton.addEventListener("click", () => {
        benefitsSection.style.display = "block";
        optInButton.style.display = "none"; // Hide button after clicking
    });

    // Show form when "Get My Monthly Roses" is clicked
    submitButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form from submitting immediately
        form.style.display = "block";
    });
});
