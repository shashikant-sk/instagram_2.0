// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React from "react";
const firebaseConfig = {
  apiKey: "AIzaSyDXKjAzF9VvSBkKrXhJpwoVSNcizrZWBj8",
  authDomain: "instagram-clone-dd68e.firebaseapp.com",
  projectId: "instagram-clone-dd68e",
  storageBucket: "instagram-clone-dd68e.appspot.com",
  messagingSenderId: "349944152713",
  appId: "1:349944152713:web:53f9d1b72186b5f48afc58",
  measurementId: "G-V42L0WB61E"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();
const auth = getAuth();
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((re) => console.log(re))
    .catch((err) => {
      console.log(err);
    });
};
const useAuth = () => {
  const [currentUser, currentUserSet] = React.useState(null);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        currentUserSet(user);
      } else {
        currentUserSet(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return currentUser;
};
export { app, db, storage, useAuth, auth, signInWithGoogle };
