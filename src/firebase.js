import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCNx89_ICiDPLBiD-hzjrXFTnUtad_4Rdw",
  authDomain: "clone-5516c.firebaseapp.com",
  databaseURL: "https://clone-5516c.firebaseio.com",
  projectId: "clone-5516c",
  storageBucket: "clone-5516c.appspot.com",
  messagingSenderId: "472197670970",
  appId: "1:472197670970:web:940545c7b2f4f4cbeeed03",
  measurementId: "G-CXHC1MXGXF"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
