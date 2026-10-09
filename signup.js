import { auth, db } from "./firebase.js";
import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
const form = document.getElementById("signupForm");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;
    if(password !== confirm){
        alert("Passwords do not match");
        return;
    }
    try{
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        await setDoc(doc(db,"users",userCredential.user.uid),{
            username,
            email,
            joinedDate:new Date().toLocaleDateString(),
            wishlist:[],
            recentlyPlayed:[]
        });
        alert("Account Created Successfully!");
        window.location.href="login.html";
    }catch(error){
        alert(error.message);
    }
});