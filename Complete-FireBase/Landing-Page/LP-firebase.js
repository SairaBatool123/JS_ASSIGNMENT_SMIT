// ------------------------------------------- attach with form -------------------------------------------------
const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () =>
  header.classList.toggle("show-mobile-menu")
);

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// -------------------------------  With the help of firebase sigout ---------------------------------------------
import {
  auth,
  signOut,
  deleteDoc,
  doc,
  db,
  onAuthStateChanged,
} from "../Form/firebase.js";

let SignOut1 = () => {
  signOut(auth)
    .then(() => {
      window.location.href = "../Form/login-form.html";
      console.log("Sign-Out Successfully");
    })
    .catch((error) => {
      console.log(error.code);
    });
};

let signout = document.getElementById("signout");
signout.addEventListener("click", SignOut1);

// ------------------------------- Account Delete  ---------------------------------------------

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log("User Already Exit =>", user);
//     let deleteAccount=async()=>{
//       let id = auth.currentUser.uid
//       console.log(id);
//       await deleteDoc(doc(db, "users", id));
//       console.log("Account Deleted");
//       if(location.pathname !== "../Form/login-form.html"){
//         window.location = "../Form/login-form.html"
//       }
//     }
//     let delete_btn = document.getElementById("delete_btn")
//     delete_btn.addEventListener('click', deleteAccount)

//   } else {
//     console.log("No User Exist Here");
//   }
// });

// OR

let deleteAccount = async () => {
  let id = auth.currentUser.uid;
  console.log(id);
  await deleteDoc(doc(db, "users", id));
  console.log("Account Deleted");
};
let delete_btn = document.getElementById("delete_btn");
delete_btn.addEventListener("click", deleteAccount);
