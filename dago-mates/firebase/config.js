// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHblXo_Vvsn_jiDXHWiiBvQ48p5VF16UQ",
    authDomain: "dagomates.firebaseapp.com",
    projectId: "dagomates",
    storageBucket: "dagomates.appspot.com",
    messagingSenderId: "897822631337",
    appId: "1:897822631337:web:1454bf7a010100f5b690b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

