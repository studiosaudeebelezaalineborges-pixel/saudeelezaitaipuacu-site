// ===== Hero Button Interativo =====
const heroButton = document.getElementById('heroButton');

if (heroButton) {
    heroButton.addEventListener('click', () => {
        alert('Bem-vindo(a) ao site da Aline Borges!');
    });
}

// ===== Scroll suave para links do menu =====
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Animação de destaque para cards =====
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});
