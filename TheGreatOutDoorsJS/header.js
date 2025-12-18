// header.js

/**
 * Cria e retorna o elemento HTML do cabeçalho (Header) da página.
 * @returns {HTMLElement} O elemento header.
 */
export function Header() {
    const navItems = [
        { text: "ABOUT", link: "#" },
        { text: "EXPLORE", link: "#" },
        { text: "JOURNAL", link: "#" },
        { text: "SEARCH", link: "#" },
    ];

    const header = document.createElement('header');
    header.classList.add('header'); // Adicionar classe para estilização

    const nav = document.createElement('nav');
    nav.classList.add('header-nav');

    // Mapeia e cria os links da navegação
    const navLinks = navItems.map(item => {
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = item.text;
        a.classList.add('header-link');
        return a;
    });

    // Cria o ícone do mapa (que parece ser o elemento central)
    const locationIcon = document.createElement('div');
    locationIcon.classList.add('location-icon');
    // Adicione a imagem ou estilização do ícone de mapa aqui, se necessário
    // Exemplo: locationIcon.innerHTML = '&#x1F4CD;'; 

    // Insere os links e o ícone na navegação, mantendo a ordem visual
    nav.append(...navLinks.slice(0, 2), locationIcon, ...navLinks.slice(2));
    
    header.appendChild(nav);

    return header;
}