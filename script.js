const games = [
    { title: "The Legend of Zelda: Breath of the Wild", image: "https://imgs.search.brave.com/xraayUJmTY8AGUit_ODXhXqbOODn1OscWPh3MxyjQoY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF84/NDcxNDItTUxVNzI2/Mzc0Njk1MDFfMTEy/MDIzLU8ud2VicA", description: "Explora Hyrule en esta épica aventura de mundo abierto." },
    { title: "Red Dead Redemption 2", image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg", description: "Vive la historia de Arthur Morgan en el Salvaje Oeste." },
    { title: "God of War", image: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg", description: "Acompaña a Kratos y Atreus en una épica aventura mitológica." },
    { title: "Cyberpunk 2077", image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg", description: "Explora Night City en esta futurista aventura de rol." },
    { title: "Elden Ring", image: "https://imgs.search.brave.com/hhRTO5loei5NwB0ccUITuJ8qC79Wf6RGuX4b3O84FRg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZWxkZW4tcmlu/Zy1waWN0dXJlcy02/cjg1dGgwZ25oaWZz/cWQwLmpwZw", description: "Un vasto mundo de fantasía creado por Hidetaka Miyazaki y George R. R. Martin." },
    { title: "Need for speed", image: "https://imgs.search.brave.com/RQZl8EJc27yfEQNEczBF4Z8LDyK-yJYSPDP4w6dqlFA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXVuZG9kZXBvcnRp/dm8uY29tL2FsZmFi/ZXRhL2hlcm8vMjAy/NS8wMi9uZWVkLWZv/ci1zcGVlZC4xNzM4/NjU0NDY3LjIxNzcu/anBnP3dpZHRoPTc2/OCZhc3BlY3RfcmF0/aW89MTY6OSZmb3Jt/YXQ9bm93ZWJw", description: "Viví el mundo de las carreras callejeras y persecuciones pero no te dejes atrapar" }
];

const gameList = document.getElementById("gameList");
const searchInput = document.getElementById("searchInput");

// Función para mostrar los juegos en la página
function displayGames(filteredGames) {
    gameList.innerHTML = "";
    filteredGames.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h2 class="game-title">${game.title}</h2>
            <p class="game-description">${game.description}</p>
        `;
        gameList.appendChild(gameCard);
    });
}

// Mostrar todos los juegos al cargar la página
displayGames(games);

// Filtrar juegos según búsqueda
searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredGames = games.filter(game => game.title.toLowerCase().includes(searchText));
    displayGames(filteredGames);
});
