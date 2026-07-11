/* =============================================
   AHA! AGENCY — MAIN JAVASCRIPT
   ============================================= */

// ---- BURGER MENU ----
const burger = document.getElementById('bg');
const navLinks = document.getElementById('nl');

burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ---- HERO ANIMATE IN ----
requestAnimationFrame(() => document.getElementById('hero').classList.add('go'));

// ---- SCROLL REVEAL ----
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.rv').forEach(el => revealObserver.observe(el));

// ---- PAKKET SELECTIE IN FORMULIER ----
const planBtns = document.querySelectorAll('.plan-btn');
const projectInput = document.getElementById('project');

planBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        planBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        if (projectInput) projectInput.value = btn.dataset.value;
    });
});

// ---- CONTACT FORMULIER ----
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Hier later een echte backend of Formspree koppelen
        // Voor nu: success melding tonen
        form.querySelectorAll('input, select, textarea').forEach(el => el.value = '');
        formSuccess.classList.add('show');
        setTimeout(() => formSuccess.classList.remove('show'), 4000);
    });
}
const nav = document.getElementById('nav');

const onScroll = () => {
    const heroHeight = document.querySelector('.hero').offsetHeight;
    nav.classList.toggle('dark', window.scrollY > heroHeight * 0.5);
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();