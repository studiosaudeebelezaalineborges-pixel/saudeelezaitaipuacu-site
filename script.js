// BOTÃO HERO → CONTATO
const heroButton = document.getElementById('heroButton');

if (heroButton) {
    heroButton.addEventListener('click', () => {
        document.getElementById('contato').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// SCROLL SUAVE MENU
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const id = link.getAttribute('href').replace('#', '');
        const section = document.getElementById(id);

        if (section) {
            window.scrollTo({
                top: section.offsetTop - 90,
                behavior: 'smooth'
            });
        }
    });
});

// ANIMAÇÃO CARDS
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
