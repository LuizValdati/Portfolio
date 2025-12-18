// explore-world.js
import { CardExplore } from './card-explore.js'; // Importa o Card

// Array de pontos turísticos (não exportado)
const touristSpots = [
    {
        city: "Nærøyfjorden",
        country: "NORWAY",
        image: "img/lago.jpg", // Use os caminhos reais das imagens
    },
    {
        city: "Antelope Canyon",
        country: "UNITED STATES",
        image: "img/canion.jpg",
    },
    {
        city: "Grossglockner",
        country: "AUSTRIA",
        image: "img/montain.jpg",
    },
];

/**
 * Cria e retorna o elemento HTML da seção "Explore the World".
 * @returns {HTMLElement} O elemento section.
 */
export function ExploreTheWorld() {
    const section = document.createElement('section');
    section.classList.add('explore-world-section'); // Adicionar classe para estilização

    const title = document.createElement('h2');
    title.textContent = "Explore the World";
    title.classList.add('section-title');

    const description = document.createElement('p');
    description.textContent = "We seek to provide the most authentic content from athletes, adventurers, explorers and travellers around the world. Our long-term mission is to educate, inspire and enable all peoples to experience & protect wilderness.";
    description.classList.add('section-description');

    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('explore-cards-container');

    // Cria os cards usando o array
    touristSpots.forEach(spot => {
        const card = CardExplore({ 
            city: spot.city, 
            country: spot.country, 
            imageUrl: spot.image 
        });
        cardsContainer.appendChild(card);
    });

    const seeMoreLink = document.createElement('a');
    seeMoreLink.href = "#";
    seeMoreLink.textContent = "SEE MORE";
    seeMoreLink.classList.add('see-more-link');

    section.append(title, description, cardsContainer, seeMoreLink);

    return section;
}