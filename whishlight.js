import { auth, db } from "./firebase.js";
import {
doc,
updateDoc,
arrayUnion,
arrayRemove
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
const buttons=document.querySelectorAll(".wishlist-btn");
buttons.forEach(button=>{
button.addEventListener("click",async()=>{
const user=auth.currentUser;
if(!user){
alert("Login First");
return;
}
const game=button.dataset.game;
const ref=doc(db,"users",user.uid);
if(button.classList.contains("active")){
await updateDoc(ref,{
wishlist:arrayRemove(game)
});
button.classList.remove("active");
button.innerHTML='<i class="fa-regular fa-heart"></i>';
}else{
await updateDoc(ref,{
wishlist:arrayUnion(game)
});
button.classList.add("active");
button.innerHTML='<i class="fa-solid fa-heart"></i>';
}
});
});