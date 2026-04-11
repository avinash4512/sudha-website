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
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "PASTE_YOUR_AUTH_DOMAIN_HERE",
  projectId: "PASTE_YOUR_PROJECT_ID_HERE",
  storageBucket: "PASTE_YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID_HERE",
  appId: "PASTE_YOUR_APP_ID_HERE"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db  = firebase.firestore();
const storage = firebase.storage();
