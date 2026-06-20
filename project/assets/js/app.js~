// assets/js/app.js
// Shared functionality for all pages

document.addEventListener('DOMContentLoaded', () => {
    // Loader
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => { loader.style.display = 'none'; }, 700);
            }, 800);
        });
    }

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Dark Mode Toggle
    const darkToggle = document.getElementById('darkToggle');
    if (darkToggle) {
        // Check for saved preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
        }
        darkToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }

    // Active Nav Link Highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section').forEach(s => {
            if (scrollY >= s.offsetTop - 150) {
                current = s.getAttribute('id');
            }
        });
        document.querySelectorAll('nav a[href^="#"]').forEach(l => {
            l.classList.remove('text-green-600');
            if (l.getAttribute('href') === `#${current}`) {
                l.classList.add('text-green-600');
            }
        });
    });

    // Lazy Loading for images
    const lazyImages = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});
