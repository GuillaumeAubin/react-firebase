import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-b422e.firebaseapp.com",
  projectId: "react-firebase-redux-b422e",
  storageBucket: "react-firebase-redux-b422e.appspot.com",
  messagingSenderId: "237627708703",
  appId: "1:237627708703:web:7dc8d3b038c5d15b5dcc2a",
});

export const auth = app.auth();
export default app;
