// the-journal.js
import { CardJournal } from './card-journal.js'; // Importa o Card

// Array de notícias (não exportado)
const journalPosts = [
    {
        date: "MAY 30, 2017",
        title: "An Unforgettable",
        description: "If you only have one day to visit Yosemite National Park and you want to make the most out of it.",
        image: "img/noticia1.jpg", // Use os caminhos reais das imagens
    },
    {
        date: "MAY 30, 2017",
        title: "Symphonies in Steel",
        description: "Crossing the Golden Gate Bridge from San Francisco, you arrive in Marin even before landing on solid ground.",
        image: "img/noticia2.jpg",
    },
];

/**
 * Cria e retorna o elemento HTML da seção "The Journal".
 * @returns {HTMLElement} O elemento section.
 */
export function TheJournal() {
    const section = document.createElement('section');
    section.classList.add('journal-section'); // Adicionar classe para estilização

    const title = document.createElement('h2');
    title.textContent = "The Journal";
    title.classList.add('section-title');

    const description = document.createElement('p');
    description.textContent = "Our favorite stories about public lands and opportunities for you to get involved in protecting your outdoor experiences.";
    description.classList.add('section-description');

    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('journal-cards-container');

    // Cria os cards usando o array
    journalPosts.forEach(post => {
        const card = CardJournal({ 
            date: post.date, 
            title: post.title, 
            description: post.description, 
            imageUrl: post.image 
        });
        cardsContainer.appendChild(card);
    });

    const allPostsLink = document.createElement('a');
    allPostsLink.href = "#";
    allPostsLink.textContent = "ALL POSTS";
    allPostsLink.classList.add('all-posts-link');

    section.append(title, description, cardsContainer, allPostsLink);

    return section;
}