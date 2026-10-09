import { auth } from "./firebase.js";
import {
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
const form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
e.preventDefault();
const email=document.querySelector("input[type=email]").value;
const password=document.querySelector("input[type=password]").value;
signInWithEmailAndPassword(auth,email,password)
.then(()=>{
alert("Login Success");
window.location.href="profile.html";
})
.catch((error)=>{
alert(error.message);
});
});