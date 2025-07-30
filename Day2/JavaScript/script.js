// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    
    hamburger.addEventListener('click', function() {
        // Toggle mobile menu
        const isMobileMenuOpen = navLinks.style.display === 'flex';
        
        if (isMobileMenuOpen) {
            navLinks.style.display = 'none';
            authButtons.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            authButtons.style.display = 'flex';
            
            // Adjust for mobile view
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
            navLinks.style.gap = '15px';
            
            authButtons.style.position = 'absolute';
            authButtons.style.top = 'calc(70px + 180px)'; // Adjust based on nav links height
            authButtons.style.left = '20px';
            authButtons.style.flexDirection = 'column';
            authButtons.style.gap = '10px';
            authButtons.style.width = 'calc(100% - 40px)';
        }
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                navLinks.style.display = 'none';
                authButtons.style.display = 'none';
            }
        });
    });
    
    // Resize event listener to reset menu when screen size increases
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            navLinks.style.display = 'flex';
            authButtons.style.display = 'flex';
            navLinks.style.flexDirection = 'row';
            navLinks.style.position = 'static';
            navLinks.style.width = 'auto';
            navLinks.style.padding = '0';
            navLinks.style.boxShadow = 'none';
            navLinks.style.gap = '25px';
            
            authButtons.style.position = 'static';
            authButtons.style.flexDirection = 'row';
            authButtons.style.gap = '15px';
            authButtons.style.width = 'auto';
        } else {
            navLinks.style.display = 'none';
            authButtons.style.display = 'none';
        }
    });
});