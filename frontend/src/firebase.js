import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

// 👇 PUNE DATELE REALE AICI (doar pentru test)
// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCuqo0lI1HrvkF_odIpx8f5Ufdi8nIin30",

  authDomain: "shop-chat-e60b1.firebaseapp.com",

  projectId: "shop-chat-e60b1",

  storageBucket: "shop-chat-e60b1.firebasestorage.app",

  messagingSenderId: "1038909288599",

  appId: "1:1038909288599:web:5908fba925847de6b779d2",

  measurementId: "G-379XK3LLDW"

};
const app = initializeApp(firebaseConfig);

// Păstrăm setarea pentru conexiune stabilă
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

console.log("Firebase conectat la proiectul:", firebaseConfig.projectId);