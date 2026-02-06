import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCAzI5rLgOPVYvE9U4kyNgeDATRX8ZpsaY",
    authDomain: "aone-98ccf.firebaseapp.com",
    projectId: "aone-98ccf",
    storageBucket: "aone-98ccf.firebasestorage.app",
    messagingSenderId: "849606554701",
    appId: "1:849606554701:web:b9544537007ad501d81804",
    measurementId: "G-S739ZF9N7T"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// Initialize Analytics (optional, client-side only)
let analytics;
if (typeof window !== "undefined") {
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(app);
        }
    });
}

export { app, db, storage, analytics };
