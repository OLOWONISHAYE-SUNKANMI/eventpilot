import * as AppleAuthentication from "expo-apple-authentication";
import { OAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "./firebaseConfig";

export const signInWithApple = async (): Promise<void> => {
  try {
    const credential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
    });

    if (credential.identityToken) {
      const provider = new OAuthProvider("apple.com");
      const firebaseCredential = provider.credential({
        idToken: credential.identityToken,
      });

      const result = await signInWithCredential(auth, firebaseCredential);
      console.log("✅ Apple signed in:", result.user.email);
    }
  } catch (err: any) {
    if (err.code === "ERR_CANCELED") {
      console.log("ℹ️ Apple Sign-In cancelled");
    } else {
      console.error("❌ Apple Sign-In error:", err);
    }
  }
};
