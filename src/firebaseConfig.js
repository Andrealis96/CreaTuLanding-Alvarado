// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Firestore y Auth
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDbmQhtZ1HcuRaKQJyTghnZ3gwOEVIB9qc",
    authDomain: "carbon-y-lenos-burger.firebaseapp.com",
    projectId: "carbon-y-lenos-burger",
    storageBucket: "carbon-y-lenos-burger.appspot.com",
    messagingSenderId: "295689329188",
    appId: "1:295689329188:web:8ce1b9c6471c7068fa96b1",
    measurementId: "G-2ZHTLZLSEW"
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Exportamos la base de datos
export const db = getFirestore(app);