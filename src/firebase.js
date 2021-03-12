import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApMDzyodzXqprYSsiO6x1BE4qrT5jc8N8",
  authDomain: "twitter-clone-5fb75.firebaseapp.com",
  projectId: "twitter-clone-5fb75",
  storageBucket: "twitter-clone-5fb75.appspot.com",
  messagingSenderId: "391037277882",
  appId: "1:391037277882:web:5a3d6fb455cab409c8d483",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
