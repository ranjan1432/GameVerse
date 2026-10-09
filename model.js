const modal = document.getElementById("gameModal");
const closeBtn = document.querySelector(".close-modal");
const learnButtons = document.querySelectorAll(".learn-more");
learnButtons.forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();
        const card = button.closest(".game-card");
        modal.classList.add("active");
        document.getElementById("modalTitle").textContent = card.querySelector("h3").textContent;
        document.getElementById("modalCategory").textContent = card.querySelector("span").textContent;
        document.getElementById("modalDescription").textContent = card.querySelector("p").textContent;
        document.getElementById("modalImage").src = card.querySelector("img").src;
        document.getElementById("modalRelease").textContent = "📅 Release : 2026";
        document.getElementById("modalSize").textContent = "💾 Size : 150 GB";
        document.getElementById("modalPlatform").textContent = "🖥 Platform : PC | PS5 | Xbox";
    });
});
closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
});
window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});