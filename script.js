// Scroll to a specific section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Form submission handler
document.getElementById("contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
});