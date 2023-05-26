// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0iUV4BEU85UtWZh3RWzCQqMqReJv_uaQ",
  authDomain: "realfast-f0e08.firebaseapp.com",
  projectId: "realfast-f0e08",
  storageBucket: "realfast-f0e08.appspot.com",
  messagingSenderId: "416135356866",
  appId: "1:416135356866:web:c274d7f5d36c7d0a94f65b"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

const auth = getAuth();

const db = getFirestore(app);

const storage = getStorage(app);

export { auth,db,storage }