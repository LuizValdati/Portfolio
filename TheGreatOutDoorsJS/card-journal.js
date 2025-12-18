// card-journal.js

/**
 * Cria e retorna o elemento HTML de um Card de Notícia do Journal.
 * @param {string} date - Data da notícia.
 * @param {string} title - Título da notícia.
 * @param {string} description - Descrição da notícia.
 * @param {string} imageUrl - URL da imagem da notícia.
 * @returns {HTMLElement} O elemento div do card.
 */
export function CardJournal({ date, title, description, imageUrl }) {
    const card = document.createElement('div');
    card.classList.add('journal-card'); // Adicionar classe para estilização

    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = title;
    image.classList.add('journal-card-image');

    const dateText = document.createElement('p');
    dateText.textContent = date;
    dateText.classList.add('journal-card-date');

    const titleText = document.createElement('h3');
    titleText.textContent = title;
    titleText.classList.add('journal-card-title');

    const descriptionText = document.createElement('p');
    descriptionText.textContent = description;
    descriptionText.classList.add('journal-card-description');

    card.append(image, dateText, titleText, descriptionText);

    return card;
}