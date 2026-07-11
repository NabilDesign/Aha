/* =============================================
   AHA! AGENCY — PROJECTEN JAVASCRIPT
   ============================================= */

// ---- BURGER MENU ----
const burger = document.getElementById('bg');
const navLinks = document.getElementById('nl');

burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ---- SCROLL REVEAL ----
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.rv').forEach(el => revealObserver.observe(el));