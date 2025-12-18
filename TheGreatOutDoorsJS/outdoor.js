// outdoor.js

/**
 * Cria e retorna o elemento HTML da seção Outdoor (principal) da página.
 * @returns {HTMLElement} O elemento section do outdoor.
 */
export function Outdoor() {
    const section = document.createElement('section');
    section.classList.add('outdoor-section'); // Adicionar classe para estilização

    const title = document.createElement('h1');
    title.textContent = "The Great Outdoors";
    title.classList.add('outdoor-title');

    const subtitle = document.createElement('p');
    subtitle.textContent = "Wander often. Wonder always.";
    subtitle.classList.add('outdoor-subtitle');

    section.append(title, subtitle);

    return section;
}