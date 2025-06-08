
document.addEventListener('DOMContentLoaded', () => {

    const systemBtn = document.getElementById('system-btn');
    const systemMessageDiv = document.getElementById('system-message');
    const toggleBtn = document.getElementById('menu-toggle');
    const navList = document.querySelector('nav ul');
    const title = document.querySelector('.hero-section h2');

    const messages = [
        "Sistema: Seu status atual é 'Online'.\nHP: ???\nMana: ???\nAguardando a próxima dungeon...",
        "Sistema: Novo item adquirido — Espada Demoníaca Kamish.",
        "Sistema: Nível aumentado! Novo nível: 52.",
        "Sistema: Habilidade desbloqueada — 'Extração das Sombras'.",
        "Sistema: Missão diária completa. Recompensa coletada.",
        "Sistema: Você sente uma presença poderosa se aproximando...",
        "Sistema: Conexão com o Monarca das Sombras... estabelecida.",
        "Sistema: Você está sendo observado por uma entidade desconhecida."
    ];

    let currentIndex = 0;

 
    if (systemBtn && systemMessageDiv) {
        systemBtn.addEventListener('click', () => {
            systemMessageDiv.textContent = messages[currentIndex];
            systemMessageDiv.classList.remove('hidden');
            currentIndex = (currentIndex + 1) % messages.length;
        });
    } else {
        console.error("Elementos 'system-btn' ou 'system-message' não encontrados.");
    }


    if (toggleBtn && navList) {
        toggleBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            toggleBtn.classList.toggle('active');
        });
    } else {
        console.error("Elementos 'menu-toggle' ou 'nav ul' não encontrados.");
    }

    if (title) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                title.style.transform = 'translateY(-10px)';
                title.style.transition = 'transform 0.5s ease-in-out';
            } else {
                title.style.transform = 'translateY(0)';
            }
        });
    }
});

$(document).ready(() => {

    $('.gallery-grid').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: (openerElement) =>
                openerElement.is('img') ? openerElement : openerElement.find('img')
        }
    });

    if ($('.bxslider').length) {
        $('.bxslider').bxSlider({
            auto: true,
            speed: 500,
            pause: 4000,
            adaptiveHeight: true,
            pager: true,
            controls: true,
            slideWidth: 600
        });
    } else {
        console.warn("Elemento .bxslider não encontrado no DOM.");
    }
});
