import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  GoogleAuthProvider, provider, signInWithPopup ,
  getFirestore,
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
} from "./firebase.js";

// ------- onAuthStateChanged (listener) Account Already exit Or LogIn in Broswer (1. application 2. index db delete db that are temporary data after that you are able to see "user not exist") --------
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User Already Exit =>", user);
    // -------------------- Not Allowed To Direct Go On Landing Page ---------------------
    if (location.pathname !== "../Landing-Page/fiver-landingPage.html") {
      window.location = "../Landing-Page/fiver-landingPage.html";
    }
  } else {
    console.log("User Not LogIn");
    // if(location.pathname !== "../Form/login-form.html"){
    //   window.location = "../Form/login-form.html"
    // }
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
      console.log("Successfully SignUp")
      console.log(user);
      // Firestore work => create collection of data here //async => (with respective parent)
      // ----------------------- ADD DOC -----------------

      try {
        const docRef = await addDoc(collection(db, "users"), {
         ...userObj,
        //  OR 
        //  name : user.displayName,
        //  photo: user.photoURL,
         uid: user.uid
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      // -------- SET DOC (ID ASSIGN BY YOURSELF)-----------
      //(sync and await both are always be in try and catch)

      try {
            const docRef = await addDoc(collection(db, "users" , user.uid), {
             ...userObj,
             uid: user.uid
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
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
      window.location.href = "../Landing-Page/fiver-landingPage.html";
    })
    .catch((error) => {
      // const errorCode = error.message;
      console.log("error", error.code);
    });
};

let signin = document.getElementById("signin");
signin.addEventListener("click", signIn);

// ---------------------- SIGN OUT (We already did it in Landing Page Refer That) -------------------------

let verify = () => {
  // if(user){ 
    sendEmailVerification(auth.currentUser)
    .then(() => {
    console.log("Email verification sent!");
  });
// }
};

let btn = document.getElementById("verify-btn");
btn.addEventListener("click", verify);

// ---------------------------- getDocs (Get ALL USER FROM FIRESTORE) ----------------------------------
let getAllUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`ID PROVIDED BY FIRESTORE ${doc.id} =>`, doc.data());
  });
};
getAllUsers();

//--------- Authentication Google PROVIDER (IP Address remove and write localhost => http://localhost:5500/Form/login-form.html) ---------
let google = ()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("SignIn With Google Successfully",user);
    
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(error.code);
    
  });
}

let googleAuth = document.getElementById("googleAuth");
googleAuth.addEventListener("click", google);