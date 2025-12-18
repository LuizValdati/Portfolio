// card-explore.js

/**
 * Cria e retorna o elemento HTML de um Card de Ponto Turístico.
 * @param {string} city - Cidade do ponto turístico.
 * @param {string} country - País do ponto turístico.
 * @param {string} imageUrl - URL da imagem demonstrativa.
 * @returns {HTMLElement} O elemento div do card.
 */
export function CardExplore({ city, country, imageUrl }) {
    const card = document.createElement('div');
    card.classList.add('explore-card'); // Adicionar classe para estilização
    card.style.backgroundImage = `url('${imageUrl}')`; // Configura a imagem de fundo

    const content = document.createElement('div');
    content.classList.add('explore-card-content');
    
    const cityText = document.createElement('h3');
    cityText.textContent = city;
    
    const countryText = document.createElement('p');
    countryText.textContent = country;

    content.append(cityText, countryText);
    card.appendChild(content);

    return card;
}