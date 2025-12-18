// index.js
import { Page } from './page.js';

// Função para inicializar a aplicação
function initializePage() {
    const pageElement = Page();
    
    // Anexa o elemento da página completa ao corpo do documento
    document
        .querySelector("body")
        .appendChild(pageElement);
}

// Inicializa a página após o carregamento do DOM
document.addEventListener('DOMContentLoaded', initializePage);