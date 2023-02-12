// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJBRfggroBawSDsmqn9ozYLAijGJGhwUg",
  authDomain: "calificaciones-fbeb5.firebaseapp.com",
  projectId: "calificaciones-fbeb5",
  storageBucket: "calificaciones-fbeb5.appspot.com",
  messagingSenderId: "533306607151",
  appId: "1:533306607151:web:ecd42a43511dce2fefa8da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);


