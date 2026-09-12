/* =============================================
   AHA! AGENCY — PROJECTEN JAVASCRIPT
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

// ---- FILTER TABS ----
const ftabs = document.querySelectorAll('.ftab');
const pcards = document.querySelectorAll('.pcard');

ftabs.forEach(tab => {
    tab.addEventListener('click', () => {
        ftabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const val = tab.dataset.f;
        pcards.forEach(card => {
            card.style.display = (val === 'all' || card.dataset.cat === val) ? 'flex' : 'none';
        });
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