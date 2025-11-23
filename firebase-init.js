// js/firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, setLogLevel } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

let db, auth;

if (firebaseConfig) {
  setLogLevel('debug');
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);

  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      try {
        if (initialAuthToken) await signInWithCustomToken(auth, initialAuthToken);
        else await signInAnonymously(auth);
        window.db = db; window.auth = auth;
        document.dispatchEvent(new Event('firebaseReady'));
      } catch (e) { console.error("Firebase Auth Error:", e); }
    } else {
      window.db = db; window.auth = auth;
      document.dispatchEvent(new Event('firebaseReady'));
    }
  });
} else {
  // No Firebase → just pretend it's ready (great for local dev)
  document.addEventListener('DOMContentLoaded', () => {
    document.dispatchEvent(new Event('firebaseReady'));
  });
}