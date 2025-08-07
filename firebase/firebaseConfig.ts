import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyADHrjPTbVjdzmoDTtLwvm8Zm-BXuapNtA",
  authDomain: "eventpilot-751e0.firebaseapp.com",
  projectId: "eventpilot-751e0",
  storageBucket: "eventpilot-751e0.appspot.com", // ✅ fixed ".app" to ".com"
  messagingSenderId: "1021876864647",
  appId: "1:1021876864647:web:737cd90bddbedc22d09a22",
  measurementId: "G-KRZTR9ND0S"
}

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig)

// ✅ Services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
