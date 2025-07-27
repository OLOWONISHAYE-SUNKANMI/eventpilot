import { auth } from "./firebaseConfig";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  User 
} from "firebase/auth";

// ✅ Register user with Email & Password
export const registerWithEmail = async (email: string, password: string): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// ✅ Login user with Email & Password
export const loginWithEmail = async (email: string, password: string): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// ✅ Logout user
export const logoutUser = async (): Promise<void> => {
  await signOut(auth);
};
