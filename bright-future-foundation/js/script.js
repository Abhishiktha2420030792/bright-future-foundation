// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth Scrolling
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        const targetId = this.getAttribute('href');

        if (targetId.length > 1) {
            e.preventDefault();

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Scroll To Top Button
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '↑';
scrollBtn.className = 'scroll-top-btn';

scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.right = '20px';
scrollBtn.style.padding = '10px 15px';
scrollBtn.style.fontSize = '18px';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '1000';

document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dark Mode Toggle
const darkModeBtn = document.createElement('button');
darkModeBtn.innerHTML = '🌙';
darkModeBtn.className = 'dark-mode-btn';

darkModeBtn.style.position = 'fixed';
darkModeBtn.style.bottom = '80px';
darkModeBtn.style.right = '20px';
darkModeBtn.style.padding = '10px 15px';
darkModeBtn.style.fontSize = '18px';
darkModeBtn.style.cursor = 'pointer';
darkModeBtn.style.zIndex = '1000';

document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Simple Form Validation
const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputs = form.querySelectorAll('input, textarea');
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                valid = false;
                input.style.border = '2px solid red';
            } else {
                input.style.border = '1px solid #ccc';
            }
        });

        if (valid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
}