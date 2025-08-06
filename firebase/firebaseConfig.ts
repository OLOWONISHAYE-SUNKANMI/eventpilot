// firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyADHrjPTbVjdzmoDTtLwvm8Zm-BXuapNtA",
authDomain: "eventpilot-751e0.firebaseapp.com",
projectId: "eventpilot-751e0",
storageBucket: "eventpilot-751e0.firebasestorage.app",
messagingSenderId: "1021876864647",
appId: "1:1021876864647:web:737cd90bddbedc22d09a22",
measurementId: "G-KRZTR9ND0S"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Authentication
export const auth = getAuth(app);