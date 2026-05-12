document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const top = target.offsetTop - 75;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // Handle accordion animations
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            accordionButtons.forEach(btn => {
                if (btn !== this) {
                    btn.classList.add('collapsed');
                }
            });
        });
    });
});
