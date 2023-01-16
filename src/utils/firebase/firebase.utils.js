import { initializeApp } from "firebase/app";
import { getAuth, 
        GoogleAuthProvider, 
        signInWithPopup, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut,
        onAuthStateChanged      
      } from "firebase/auth";

import {
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  writeBatch,
  query,
  getDocs
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCyx4zu1G3xHcl2HRyJEamwigw0Aso8w4c",
    authDomain: "my-cloth-shop-5edc4.firebaseapp.com",
    projectId: "my-cloth-shop-5edc4",
    storageBucket: "my-cloth-shop-5edc4.appspot.com",
    messagingSenderId: "591223254777",
    appId: "1:591223254777:web:902c0ff0539dc7681efc28"
  };

  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit();
  console.log("done")
}

export const getCollectionAndDocuments = async (type) => {
  const collectionRef = collection(db, type);
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map((snap) => snap.data());

  // const categoryMap = querySnapShot.docs.reduce((acc, snapShot) => {
  //   const {title, items} = snapShot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {})
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnaphot = await getDoc(userDocRef);
  console.log(userSnaphot.exists())

  if (!userSnaphot.exists()){
    const {displayName, email} = userAuth;

    const createdAt = new Date();
    try {
      setDoc(userDocRef, {
        displayName, 
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
        console.log("UserSnapShot Error: " + error);
    }
  }

  return userSnaphot;
}

export const createWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInWithEmail = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const authStateListener = (callback) => onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}

