/*
  ============================================================
  firebase-config.js  —  YOUR FIREBASE SETTINGS GO HERE
  ============================================================
  STEP 1: Go to https://console.firebase.google.com
  STEP 2: Click "Add Project" → give it any name → Continue
  STEP 3: Click "Web" icon (</>)  → Register app
  STEP 4: Copy the firebaseConfig object shown and paste BELOW
  STEP 5: In Firebase console → "Firestore Database" → Create database → Start in TEST MODE
  STEP 6: In Firebase console → "Storage" → Get started → Start in TEST MODE
  ============================================================
*/

const firebaseConfig = {
  apiKey: "AIzaSyAl2PmJh2DGgujscaZrYmCUAepcqK5P6Bk",
  authDomain: "sudha-lic-website.firebaseapp.com",
  projectId: "sudha-lic-website",
  storageBucket: "sudha-lic-website.firebasestorage.app",
  messagingSenderId: "236994886282",
  appId: "1:236994886282:web:7072b506e8c739430fcb73"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db  = firebase.firestore();
const storage = firebase.storage();
