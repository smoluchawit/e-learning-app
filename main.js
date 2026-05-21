document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((link) => link.classList.remove('active'));
                    const active = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
                    if (active) active.classList.add('active');
                }
            });
        },
        { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
});