document.addEventListener('DOMContentLoaded', function() {
    // Define segments and their corresponding sections
    const segments = {
        web: ['Web Development'],
        webapp: ['Web App Development'],
        ecommerce: ['E-Commerce Development'],
        system: ['System Design'],
        mobile: ['Mobile App Development'],
        design: ['Web Design', 'Mobile App Design', 'Logo Design'],
        hybrid: ['Hybrid Development']
    };

    // Add segment classes to sections
    document.querySelectorAll('.service-category').forEach(section => {
        const title = section.querySelector('h2').textContent;
        // Find which segment this section belongs to
        for (const [segment, titles] of Object.entries(segments)) {
            if (titles.includes(title)) {
                section.classList.add(`segment-${segment}`);
                break;
            }
        }
    });

    // Handle segment filtering
    const buttons = document.querySelectorAll('.btn-segment');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Hide all sections first
            document.querySelectorAll('.service-category').forEach(section => {
                section.style.display = 'none';
            });

            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get segment type
            const segment = this.dataset.segment;
            
            // Show only the selected segment
            if (segment === 'all') {
                document.querySelectorAll('.service-category').forEach(section => {
                    section.style.display = 'block';
                });
            } else {
                document.querySelectorAll(`.segment-${segment}`).forEach(section => {
                    section.style.display = 'block';
                });
            }

            // Smooth scroll to top of services
            document.querySelector('.segment-filter').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Hide all sections first
    document.querySelectorAll('.service-category').forEach(section => {
        section.style.display = 'none';
    });

    // Show web development segment by default and activate its button
    document.querySelectorAll('.segment-web').forEach(section => {
        section.style.display = 'block';
    });
    document.querySelector('[data-segment="web"]').classList.add('active');

});
