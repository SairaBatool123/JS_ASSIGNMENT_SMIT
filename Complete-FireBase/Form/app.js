import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  getFirestore,
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
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
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let userObj = { name, email };
  // console.log(userObj);

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log("Successfully SignUp", user);
      // Firestore work => create collection of data here //async => (with respective parent)
      // ----------------------- ADD DOC -----------------
      // try {
      //   const docRef = await addDoc(collection(db, "users"), {
      //    ...userObj,
      //    uid: user.uid
      //   });
      //   console.log("Document written with ID: ", docRef.id);
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }

      // ----------------------- SET DOC (ID ASSIGN BY YOURSELF)-----------------
      // (sync and await both are always be in try and catch)
      // try {
      //       const docRef = await addDoc(collection(db, "users"), {
      //        ...userObj,
      //        uid: user.uid
      //       });
      //       console.log("Document written with ID: ", docRef.id);
      //     } catch (e) {
      //       console.error("Error adding document: ", e);
      //     }
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

let verify = () => {
  sendEmailVerification(auth.currentUser).then(() => {
    console.log("Email verification sent!");
  });
};

let btn = document.getElementById("verify-btn");
btn.addEventListener("click", verify);

// ----------------------------- Get ALL USER FROM FIRESTORE ----------------------------------
let getAllUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`ID PROVIDED BY FIRESTORE ${doc.id} =>`, doc.data());
  });
};
getAllUsers();
