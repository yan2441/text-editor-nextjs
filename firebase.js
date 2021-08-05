import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9zQ6UpXWdK2YuEpk3iDUkhDpw_atSO_Q",
  authDomain: "nextjs-text-editor.firebaseapp.com",
  projectId: "nextjs-text-editor",
  storageBucket: "nextjs-text-editor.appspot.com",
  messagingSenderId: "129368930811",
  appId: "1:129368930811:web:6b7098803b81c7b1df335e"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore();

export { db }