document.addEventListener('DOMContentLoaded', function() {
    // Determine if we're in the root directory or html directory
    const isRoot = !window.location.pathname.includes('/html/');
    const navbarPath = isRoot ? 'html/navbar.html' : 'navbar.html';
    const footerPath = isRoot ? 'html/footer.html' : 'footer.html';

    // Load navbar
    fetch(navbarPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));

    // Load footer
    fetch(footerPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});