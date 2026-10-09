import { auth, db } from "./firebase.js";
import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
const username = document.querySelector(".sidebar h2");
const email = document.querySelector(".sidebar p");
onAuthStateChanged(auth, async(user)=>{
    if(user){
        const ref = doc(db,"users",user.uid);
        const snap = await getDoc(ref);
        if(snap.exists()){
            username.innerText = snap.data().username;
            email.innerText = snap.data().email;
        }
    }else{
        window.location.href="login.html";
    }
});
document.querySelector(".logout").addEventListener("click",()=>{
    signOut(auth).then(()=>{
        window.location.href="login.html";
    });
});