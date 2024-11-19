import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  GoogleAuthProvider,
  provider,
  signInWithPopup,
  getFirestore,
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
} from "./firebase.js";

// ------- onAuthStateChanged (listener) Account Already exit Or LogIn in Broswer (1. application 2. index db delete db that are temporary data after that you are able to see "user not exist") --------
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log("User Already Exit =>", user);
//     // -------------------- Not Allowed To Direct Go On Landing Page ---------------------
//     if (location.pathname !== "../Landing-Page/fiver-landingPage.html") {
//       window.location = "../Landing-Page/fiver-landingPage.html";
//     }
//   } else {
//     console.log("No User Exist Here");
//     // if(location.pathname !== "../Form/login-form.html"){
//     //   window.location = "../Form/login-form.html"
//     // }
//   }
// });

// ----------------------------------------------- SIGN UP ---------------------------------------------------
let signUp = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  // not showing a password in firebase broswer (illegal)
  let password = document.getElementById("password").value;
  let userObj = { name, email , password};
  // console.log(userObj);

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log("Successfully SignUp");
      console.log(user);
      // Firestore work => create collection of data here //async => (with respective parent)
      // ----------------------- ADD DOC -----------------
      // ======This is not working because of authonstatechange===== 
      try {
        const docRef = await addDoc(collection(db, "users"), {
          ...userObj,
          //  OR
          //  name : user.displayName,
          //  photo: user.photoURL,
           uid: user.uid,
        });
        console.log("AddDoc => Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  
      // let updateProfile = async () => {
      //   // console.log("test");
      //   let name = document.getElementById("name").value;
      //   // let number = document.getElementById("number").value;
      //   console.log(auth.currentUser.uid);
      //   let id = auth.currentUser.uid;
        // try {
        //   const washingtonRef = doc(db, "users", id);
        //   await updateDoc(washingtonRef, 
        //     {name,
        //     // number,
        //     timestamp: serverTimestamp(),
        //   }
        //   );
        //   console.log("Updated");
      
        // } catch (e) {
        //   console.log(e);
        // }
      // };
      let update_btn = document.querySelector("#update_btn");
      update_btn.addEventListener("click", updateProfile);
      // -------- SET DOC (ID ASSIGN BY YOURSELF)-----------
      //(sync and await both are always be in try and catch)

      // try {
      //   await setDoc(doc(db, "users", user.uid), {
      //     ...userObj,
      //     uid: user.uid,
      //   });
      //   console.log("Document written with ID: ", user.id);
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }
    })
    .catch((error) => {
      console.log("error", error.code);
    });
};

let signup = document.getElementById("signup");
signup.addEventListener("click", signUp);

// // Firestore work => create collection of data here //async => (with respective parent)
//       // ----------------------- ADD DOC -----------------

//       try {
//         const docRef = await addDoc(collection(db, "users"), {
//           // ...userObj,
//           //  OR
//           //  name : user.displayName,
//           //  photo: user.photoURL,
//           //  uid: user.uid,
//            name : "sana"
//         });
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }

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

// ---------------------- EMAIL VERIFICATION -------------------------

// let verify = () => {
//   try {
//   // if(user){
//     sendEmailVerification(auth.currentUser)
//     .then(() => {
//     console.log("Email verification sent!");
//   });
// }catch(error) {
//     console.log("error", error.code);
//   };
// // }
// };

// async function verify() {
//   const user = auth.currentUser; // Get the currently signed-in user

// if (user) {
//   try {
//     await sendEmailVerification(user);
//     alert("Verification email sent! Check your inbox.");
//   } catch (error) {
//     console.error("Error sending verification email:", error);
//     alert("Failed to send verification email.");
//   }
// }
//  else {
//   alert("No user is signed in.");
// }
// }

// let btn = document.getElementById("verify-btn");
// btn.addEventListener("click", verify);

// ---------------------------- getDocs (Get ALL USER FROM FIRESTORE) ----------------------------------
let getAllUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(
      `Get Docs => ID PROVIDED BY FIRESTORE ${doc.id} =>`,
      doc.data()
    );
  });
};
getAllUsers();

//--------- Authentication Google PROVIDER (IP Address remove and write localhost => http://localhost:5500/Form/login-form.html) ---------
let google = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("SignIn With Google Successfully", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error.code);
    });
};

let googleAuth = document.getElementById("googleAuth");
googleAuth.addEventListener("click", google);
