const gameContainer = document.querySelector(".games-container");
async function loadGames() {
    const response = await fetch("./assest/data/games.json");
    const games = await response.json();
    displayGames(games);
}
function displayGames(games){
    gameContainer.innerHTML="";
    games.forEach(game=>{
        gameContainer.innerHTML +=`
        <div class="game-card">
            <img src="${game.image}" alt="${game.name}">
            <div class="game-content">
                <h3>${game.name}</h3>
                <p>⭐ ${game.rating}</p>
                <p>${game.category}</p>
                <button class="details-btn">
                    View Details
                </button>
            </div>
        </div>
        `;
    });
}
loadGames();