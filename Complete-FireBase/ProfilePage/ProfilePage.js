document.getElementById('fileInput').onchange = function(event) {
  const file = event.target.files[0];
  if (file) {
      const preview = document.getElementById('preview');
      preview.src = URL.createObjectURL(file); // Set preview source to file URL
      preview.style.display = 'block'; // Show preview image
  }
};


// ----------------------------  UPDATE DOC ------------------------------------
import {updateDoc , doc , db , auth , deleteDoc} from "../Form/firebase.js"

let updateProfile=async()=>{
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
console.log(name,email,password);


  const userRef = doc(db, "user", auth.currentUser.uid);
  await updateDoc(userRef, {
    name: name.value,
    email: email.value,
    password: password.value
  });
  console.log("Update Profile");
  
}
let update = document.getElementById("update");
update.addEventListener("click", updateProfile);

// ----------------------------  DELETE ACCOUNT ------------------------------------

let deleteAccount=async()=>{
  let id = auth.currentUser.uid
  console.log(id);
  await deleteDoc(doc(db, "users", id));
  console.log("Account Deleted");
}
let delete_btn = document.getElementById("delete_btn")