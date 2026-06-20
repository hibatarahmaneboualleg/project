// assets/js/app.js
// Shared functionality for all pages

document.addEventListener('DOMContentLoaded', () => {
    // Loader - إخفاء شاشة التحميل
    const loader = document.getElementById('loader');
    if (loader) {
        // إخفاء سريع بعد تحميل الصفحة
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
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
            if (window.scrollY >= s.offsetTop - 150) {
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

    console.log('AgriFuture app.js loaded successfully');
});
