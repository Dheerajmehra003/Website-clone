import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyA2Nh1zm_hdCOhamMMKLpFti3zDl7iSpY8",
  authDomain: "netflix-clone-e31f3.firebaseapp.com",
  projectId: "netflix-clone-e31f3",
  storageBucket: "netflix-clone-e31f3.firebasestorage.app",
  messagingSenderId: "122557008252",
  appId: "1:122557008252:web:f5096d6093a4bb037ebcf9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

const signup = async(name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '))
    
  }
}

const login = async(email, password) => {
 try {
    await signInWithEmailAndPassword(auth, email, password)
 } catch (error) {
   console.log(error)
   toast.error(error.code.split('/')[1].split('-').join(' '))
 }
}

const logout = () => {
  signOut(auth)
}

export {auth, db, login, signup, logout};