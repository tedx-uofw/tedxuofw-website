// /* Firebase */

import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtzvljgouoTYQ7dvwIwdS4tkvKsgtKSBc",
  authDomain: "tedxuofw-1de88.firebaseapp.com",
  projectId: "tedxuofw-1de88",
  storageBucket: "tedxuofw-1de88.appspot.com",
  messagingSenderId: "822773960586",
  appId: "1:822773960586:web:9a89a5c72a85694e28c273",
  measurementId: "G-866Z7XN4WV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };