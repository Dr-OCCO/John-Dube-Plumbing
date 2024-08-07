document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent the default form submission

        // Retrieve form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple form validation
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Handle form submission (e.g., send data to server or display a thank you message)
        alert('Thank you for your message! We will get back to you soon.');

        // Reset the form
        form.reset();
    });
});
