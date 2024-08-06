// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTuzIQw0DPDBG3IRHc9qHn_0902LUpXOs",
  authDomain: "neurolift-84c70.firebaseapp.com",
  projectId: "neurolift-84c70",
  storageBucket: "neurolift-84c70.appspot.com",
  messagingSenderId: "216276494722",
  appId: "1:216276494722:web:fdf8df643e210dbb71479b",
  measurementId: "G-X9RMLQRPP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); 
export const db = getFirestore(app);
export default app; 