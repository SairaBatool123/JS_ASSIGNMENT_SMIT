import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged , sendEmailVerification 
} from "./firebase.js";

// ---------------- onAuthStateChanged (listener) Account Already exit Or LogIn in Broswer  -------------------
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User Already Exit");
    } else {
      console.log("User Not Found");
      
    }
  });

// ----------------------------------------------- SIGN UP ---------------------------------------------------
let signUp = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Successfully SignIn", user);
    })
    .catch((error) => {
      console.log("error", error.code);
    });
};

let signup = document.getElementById("signup");
signup.addEventListener("click", signUp);

// ----------------------------------------------- SIGN IN ---------------------------------------------------

let signIn = () => {
  let email = document.getElementById("email1").value;
  let password = document.getElementById("password1").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Successfully LogIn", user);
    })
    .catch((error) => {
      // const errorCode = error.message;
      console.log("error", error.code);
    });
};

let signin = document.getElementById("signin");
signin.addEventListener("click", signIn);

// ---------------------- SIGN OUT (We already did it in Lnding Page Refer That) -------------------------

let verify = ()=>{
sendEmailVerification(auth.currentUser)
  .then(() => {
   console.log("Email verification sent!");
  });
} 

let btn = document.getElementById('verify-btn');
btn.addEventListener('click' , verify);