// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV5aBHT_zoMU97G15QLrszwhJLPxE5ujg",
  authDomain: "mdevassignment.firebaseapp.com",
  projectId: "mdevassignment",
  storageBucket: "mdevassignment.appspot.com",
  messagingSenderId: "688911259753",
  appId: "1:688911259753:web:e625ac672d3c397c30eaf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

//REGISTER
export const registerUser = async (email, password, additionalInfo) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    //additional info for users
    await setDoc(doc(db, "users", user.uid), {
      ...additionalInfo,
      uid: user.uid
    });
    //returning user
    return user;
};


  //LOGIN
  export const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };