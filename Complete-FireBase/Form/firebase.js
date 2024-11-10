  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut ,sendEmailVerification , GoogleAuthProvider, signInWithPopup } from
"https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore , collection, addDoc , getDocs , doc, setDoc,updateDoc  } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyAhRYaOgDpCzvA6KKA8jbIv1KCtQiE3-GY",
  authDomain: "fir-assignment-f5e92.firebaseapp.com",
  projectId: "fir-assignment-f5e92",
  storageBucket: "fir-assignment-f5e92.firebasestorage.app",
  messagingSenderId: "739936651844",
  appId: "1:739936651844:web:f7c4776a7e3c5ddfe08a11"
};
  

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();
  export {auth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut ,sendEmailVerification , GoogleAuthProvider, provider, signInWithPopup , getFirestore , db , collection, addDoc , getDocs , doc, setDoc , updateDoc }
