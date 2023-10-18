// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrrI8U4YVCwwP_nkEqJ9VzXEwEhcXIKWs",
  authDomain: "evoautos.firebaseapp.com",
  projectId: "evoautos",
  storageBucket: "evoautos.appspot.com",
  messagingSenderId: "1094241926670",
  appId: "1:1094241926670:web:5c3b0098477164fa7c865f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;