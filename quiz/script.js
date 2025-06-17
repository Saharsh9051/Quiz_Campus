document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');

    if (mobileNavToggle && navLinks && authButtons) {
        mobileNavToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            authButtons.classList.toggle('active');

            // Change icon on toggle
            const icon = mobileNavToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Optional: Close mobile menu when a link is clicked
    const allNavLinks = document.querySelectorAll('.nav-links a, .auth-buttons a');
    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                authButtons.classList.remove('active');
                mobileNavToggle.querySelector('i').classList.remove('fa-times');
                mobileNavToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
});