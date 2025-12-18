// page.js
import { Header } from './header.js';
import { Outdoor } from './outdoor.js';
import { ExploreTheWorld } from './explore-world.js';
import { TheJournal } from './the-journal.js';
import { Footer } from './footer.js';

/**
 * Cria e retorna o elemento HTML da página completa, combinando todos os componentes.
 * @returns {HTMLElement} O elemento principal (geralmente uma div ou main) que contém a página.
 */
export function Page() {
    // Container principal para envolver todo o conteúdo
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-page-container');

    // Adiciona os componentes na ordem correta
    mainContainer.appendChild(Header());
    mainContainer.appendChild(Outdoor());
    mainContainer.appendChild(ExploreTheWorld());
    mainContainer.appendChild(TheJournal());
    mainContainer.appendChild(Footer());

    return mainContainer;
}