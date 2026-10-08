import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCJBRsfr1j6egxhiMbjUJ_3ipjvWsTcrAM",
  authDomain: "feedback-54eb6.firebaseapp.com",
  projectId: "feedback-54eb6",
  storageBucket: "feedback-54eb6.firebasestorage.app",
  messagingSenderId: "524697109342",
  appId: "1:524697109342:web:bdbbb97ee3a7e7728185cf"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };