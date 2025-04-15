import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDLtWxiyEPvixnbA8ZOP4BD56HYcEiRDP8",
  authDomain: "netflix-clone-9a31f.firebaseapp.com",
  projectId: "netflix-clone-9a31f",
  storageBucket: "netflix-clone-9a31f.firebasestorage.app",
  messagingSenderId: "858546666987",
  appId: "1:858546666987:web:ddf1fe7b576fa3c232edae"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name,email,password)=>{
    try{
    const res = await createUserWithEmailAndPassword(auth,email,password);
    const user =res.user;
    await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        AuthProvider:"local",
        email,
    });
   } catch (error){
       console.log(error);
       toast.error(error.code.split('/')[1].split('-').join(" "));
   }
}

const login = async (email,password)=>{
   try {
   await signInWithEmailAndPassword(auth,email,password)
   } catch (error) {
    console.log(error);
   toast.error(error.code.split('/')[1].split('-').join(" "));
   }
}

const logOut=()=>{
    signOut(auth);
}

export {auth,db,login,signup,logOut};