// ========== HEADER SCROLL ==========
const header = document.getElementById('header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
}, {passive: true});

// ========== MOBILE NAV ==========
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('navOverlay');

function toggleNav() {
    const open = nav.classList.toggle('open');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = open ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleNav);
overlay.addEventListener('click', toggleNav);
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if (nav.classList.contains('open')) toggleNav();
}));

// ========== FAQ ACCORDION ==========
document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const answer = item.querySelector('.faq__answer');
        const isActive = item.classList.contains('active');

        document.querySelectorAll('.faq__item.active').forEach(other => {
            other.classList.remove('active');
            other.querySelector('.faq__answer').style.maxHeight = '0';
        });

        if (!isActive) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// ========== PRICE CALCULATOR ==========
const slider = document.getElementById('calcDays');
if (slider) {
    const daysEl = document.getElementById('calcDaysValue');
    const perDayEl = document.getElementById('calcPerDay');
    const totalEl = document.getElementById('calcTotal');

    function calcPrice(days) {
        if (days >= 30) return 10;
        if (days >= 15) return 13;
        return 16;
    }

    function updateCalc() {
        const days = parseInt(slider.value);
        const price = calcPrice(days);
        const total = days * price;
        daysEl.textContent = days;
        perDayEl.textContent = price + ' EUR';
        totalEl.textContent = total + ' EUR';
    }

    slider.addEventListener('input', updateCalc);
    updateCalc();
}

// ========== SCROLL ANIMATIONS ==========
const animateEls = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('animated'), i * 80);
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.1, rootMargin: '0px 0px -40px 0px'});

animateEls.forEach(el => observer.observe(el));

// ========== COUNTER ANIMATION ==========
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count);
            const duration = 2000;
            const start = performance.now();

            function update(now) {
                const progress = Math.min((now - start) / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(target * ease);
                if (progress < 1) requestAnimationFrame(update);
            }

            requestAnimationFrame(update);
            counterObserver.unobserve(el);
        }
    });
}, {threshold: 0.5});

counters.forEach(el => counterObserver.observe(el));

// ========== CONTACT FORM ==========
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const name = data.get('name');
        const phone = data.get('phone');
        const device = data.get('device');
        const message = data.get('message') || '';

        const text = `Novi upit s kinetek.hr:%0A%0AIme: ${name}%0ATelefon: ${phone}%0AUređaj: ${device}%0APoruka: ${message}`;
        window.open(`https://wa.me/385958485348?text=${text}`, '_blank');
        form.reset();
    });
}