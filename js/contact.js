document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Prepare template parameters
    const templateParams = {
        from_name: name,
        reply_to: email,
        subject: subject,
        message: message
    };

    // Show loading state
    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = 'Sending...';
    submitButton.disabled = true;

    // Send email using EmailJS
    emailjs.send('service_etlkh6n', 'template_rojl2kb', templateParams)
        .then(function(response) {
            showAlert('Message sent successfully!', 'success');
            document.getElementById('contactForm').reset();
        })
        .catch(function(error) {
            showAlert('Failed to send message. Please try again.', 'danger');
        })
        .finally(function() {
            // Reset button state
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
        });
});

function showAlert(message, type) {
    const alertElement = document.getElementById('alertMessage');
    alertElement.textContent = message;
    alertElement.className = `alert alert-${type}`;
    alertElement.classList.remove('d-none');

    // Hide alert after 5 seconds
    setTimeout(() => {
        alertElement.classList.add('d-none');
    }, 5000);
}