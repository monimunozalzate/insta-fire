import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app'
import { FieldValue, getFirestore,  serverTimestamp} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwLnNIogMrBy7sQyefi3H77r45FVJvl_g",
    authDomain: "instafire-969e5.firebaseapp.com",
    projectId: "instafire-969e5",
    storageBucket: "instafire-969e5.appspot.com",
    messagingSenderId: "337916201098",
    appId: "1:337916201098:web:dc359d2bcc1e17dcee4573"
};


const app = initializeApp(firebaseConfig);

export const projectStorage = getStorage();
export const projectFirestore = getFirestore(app);
