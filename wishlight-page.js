const container = document.getElementById("wishlistContainer");
const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
if (wishlist.length === 0) {
    container.innerHTML = `
        <h2 style="color:white;text-align:center;">
            No Games in Wishlist 😔
        </h2>
    `;
}
else{
    wishlist.forEach(game=>{
        container.innerHTML += `
        <div class="wishlist-item">
            <h3>${game}</h3>
            <button class="remove-btn" onclick="removeGame('${game}')">
                Remove
            </button>
        </div>
        `;
    });
}
function removeGame(game){
    let updatedWishlist = wishlist.filter(item => item !== game);
    localStorage.setItem("wishlist",JSON.stringify(updatedWishlist));
    location.reload();
}