// Seleciona todos os botões com a classe "play-btn"
const playButtons = document.querySelectorAll('.play-btn');

// Adiciona um evento de clique para cada botão
playButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Evita o comportamento padrão do link
        const link = button.getAttribute('href');
        if (link) {
            window.location.href = link;
        }
    });
});

// Adiciona efeito na navbar ao rolar a página
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

document.addEventListener("DOMContentLoaded", () => {
    let darkmode = localStorage.getItem('darkmode');
    const themeSwitch = document.getElementById('theme-switch');

    const enableDarkmode = () => {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkmode', 'active');
    };

    const disableDarkmode = () => {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkmode', null);
    };

    if (darkmode === "active") enableDarkmode();

    if (themeSwitch) {
        themeSwitch.addEventListener("click", () => {
            darkmode = localStorage.getItem('darkmode');
            darkmode !== "active" ? enableDarkmode() : disableDarkmode();
        });
    }
});
