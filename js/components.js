document.addEventListener('DOMContentLoaded', function() {
    // Get the current page path
    const currentPath = window.location.pathname;
    const isRoot = currentPath === '/' || currentPath.endsWith('index.html');
    
    // Set the correct path for components based on whether we're at root or in subfolders
    const basePath = isRoot ? '' : '../';
    
    // Function to load HTML components
    async function loadComponent(elementId, componentPath) {
        try {
            const response = await fetch(componentPath);
            if (response.ok) {
                const html = await response.text();
                document.getElementById(elementId).innerHTML = html;
                
                // Adjust links in the navbar and footer based on current location
                if (isRoot) {
                    // If we're at the root, no need to adjust paths
                } else {
                    // If we're in a subfolder, adjust paths in the navbar
                    const navbar = document.querySelector('.navbar');
                    if (navbar) {
                        // Fix navbar brand logo
                        const brandLogo = navbar.querySelector('.navbar-brand img');
                        if (brandLogo) {
                            brandLogo.src = brandLogo.src.replace('images/', '../images/');
                        }
                        
                        // Fix navbar links
                        const navLinks = navbar.querySelectorAll('.nav-link, .navbar-brand');
                        navLinks.forEach(link => {
                            if (link.getAttribute('href') === 'index.html') {
                                link.setAttribute('href', '../index.html');
                            } else if (link.getAttribute('href').startsWith('html/')) {
                                link.setAttribute('href', link.getAttribute('href').replace('html/', ''));
                            }
                        });
                    }
                    
                    // Adjust paths in the footer
                    const footer = document.querySelector('.footer');
                    if (footer) {
                        // Fix footer logo
                        const footerLogo = footer.querySelector('.footer-logo');
                        if (footerLogo) {
                            footerLogo.src = footerLogo.src.replace('images/', '../images/');
                        }
                        
                        // Fix footer links
                        const footerLinks = footer.querySelectorAll('a');
                        footerLinks.forEach(link => {
                            if (link.getAttribute('href') === 'index.html') {
                                link.setAttribute('href', '../index.html');
                            } else if (link.getAttribute('href').startsWith('html/')) {
                                link.setAttribute('href', link.getAttribute('href').replace('html/', ''));
                            }
                        });
                    }
                }
                
                // Highlight active nav item
                highlightActiveNavItem();
            }
        } catch (error) {
            console.error('Error loading component:', error);
        }
    }
    
    // Function to highlight the active navigation item
    function highlightActiveNavItem() {
        const navLinks = document.querySelectorAll('.nav-link');
        const currentPageName = window.location.pathname.split('/').pop();
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            // Check if this is the homepage
            if (currentPageName === '' || currentPageName === 'index.html') {
                if (link.getAttribute('href') === 'index.html' || link.getAttribute('href') === '../index.html') {
                    link.classList.add('active');
                }
            } 
            // Check for other pages
            else {
                const linkHref = link.getAttribute('href');
                if (linkHref && linkHref.includes(currentPageName)) {
                    link.classList.add('active');
                }
            }
        });
    }
    
    // Load the navbar and footer
    loadComponent('navbar-container', `${basePath}html/navbar.html`);
    loadComponent('footer-container', `${basePath}html/footer.html`);
});