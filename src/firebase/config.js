import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app'
import { FieldValue, getFirestore,  serverTimestamp} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGCNjLgdtiBsKdCUC424ZstTLBYbVA6MI",
    authDomain: "insta-fire-19de8.firebaseapp.com",
    projectId: "insta-fire-19de8",
    storageBucket: "insta-fire-19de8.appspot.com",
    messagingSenderId: "874965485984",
    appId: "1:874965485984:web:7e1e1775b5bb136adafcc5"
  };


const app = initializeApp(firebaseConfig);

export const projectStorage = getStorage();
export const projectFirestore = getFirestore(app);
