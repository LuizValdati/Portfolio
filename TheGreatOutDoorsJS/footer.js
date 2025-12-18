// footer.js

/**
 * Cria e retorna o elemento HTML do rodapé (Footer) da página.
 * @returns {HTMLElement} O elemento footer.
 */
export function Footer() {
    const footer = document.createElement('footer');
    footer.classList.add('footer'); // Adicionar classe para estilização
    // A imagem de fundo da seção final será aplicada via CSS no body ou container principal.

    const copyright = document.createElement('p');
    copyright.textContent = "© 2017 THE GREAT OUTDOORS. All rights reserved.";
    copyright.classList.add('footer-copyright');

    const nav = document.createElement('nav');
    nav.classList.add('footer-nav');

    const navItems = [
        { text: "ABOUT", link: "#" },
        { text: "EXPLORE", link: "#" },
        { text: "JOURNAL", link: "#" },
        { text: "SEARCH", link: "#" },
    ];

    const navLinks = navItems.map(item => {
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = item.text;
        a.classList.add('footer-link');
        return a;
    });

    nav.append(...navLinks);

    // Cria um container para centralizar o texto e a navegação sobre a imagem
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('footer-content');
    contentContainer.append(copyright, nav);

    footer.appendChild(contentContainer);

    return footer;
}