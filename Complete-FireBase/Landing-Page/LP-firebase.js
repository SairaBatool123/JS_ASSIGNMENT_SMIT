// ------------------------------------------- attach with form -------------------------------------------------
const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());


// -------------------------------  With the help of firebase sigout ---------------------------------------------
import {auth, signOut} from "../Form/firebase.js"

let SignOut1 = ()=>{
  signOut(auth).then(() => {
    window.location.href="../Form/login-form.html"
    console.log("Sign-Out Successfully");
    
  }).catch((error) => {
    console.log(error.code);
    
  });
}

let signout = document.getElementById("signout")
signout.addEventListener('click' , SignOut1);