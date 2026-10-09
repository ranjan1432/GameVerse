const searchInput = document.getElementById("searchInput");
const featuredSection = document.getElementById("featured");
searchInput.addEventListener("input", function () {
    const value = this.value.trim().toLowerCase();
    const cards = document.querySelectorAll(".game-card");
    if (value === "") {
        cards.forEach(card => {
            card.style.display = "";
        });
        return;
    }
    let found = false;
    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        if (title.includes(value)) {
            card.style.display = "";
            found = true;
        } else {
            card.style.display = "none";
        }
    });
    if (found) {
        featuredSection.scrollIntoView({
            behavior: "smooth"
        });
    }
});