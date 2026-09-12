/* =============================================
   AHA! AGENCY — MAIN JAVASCRIPT
   ============================================= */

// ---- BURGER MENU ----
const burger = document.getElementById('bg');
const navLinks = document.getElementById('nl');
const nlClose = document.getElementById('nlClose');

burger.addEventListener('click', () => navLinks.classList.toggle('open'));
if (nlClose) nlClose.addEventListener('click', () => navLinks.classList.remove('open'));
navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ---- MOBILE HERO FOTO ----
const heroBg = document.getElementById('heroBg');
if (heroBg && window.innerWidth <= 640) {
    heroBg.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80';
}

// ---- HERO ANIMATE IN ----
requestAnimationFrame(() => document.getElementById('hero').classList.add('go'));

// ---- NAV SCROLL EFFECT ----
const nav = document.getElementById('nav');
const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---- MOBILE: kaarten klikbaar ipv hover ----
document.querySelectorAll('.hcard').forEach(card => {
    card.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');
        document.querySelectorAll('.hcard').forEach(c => c.classList.remove('open'));
        if (!isOpen) card.classList.add('open');
    });
});

// ---- SCROLL REVEAL ----
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.rv').forEach(el => revealObserver.observe(el));

// ---- PAKKET SELECTIE ----
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
const sanitize = (str) => str.replace(/[<>'"&]/g, c => ({'<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;','&':'&amp;'}[c]));

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const naam = sanitize(document.getElementById('naam').value.trim());
        const email = document.getElementById('email').value.trim();
        const bericht = sanitize(document.getElementById('bericht').value.trim());
        if (!naam || naam.length < 2) return;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
        if (!bericht || bericht.length < 10) return;
        form.querySelectorAll('input, textarea').forEach(el => el.value = '');
        planBtns.forEach(b => b.classList.remove('selected'));
        if (projectInput) projectInput.value = '';
        formSuccess.classList.add('show');
        setTimeout(() => formSuccess.classList.remove('show'), 4000);
    });
}