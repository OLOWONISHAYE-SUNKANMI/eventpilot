import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "./firebaseConfig";

// ✅ Required for Expo AuthSession (completes auth flow)
WebBrowser.maybeCompleteAuthSession();

export const useGoogleAuth = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "YOUR_EXPO_CLIENT_ID.apps.googleusercontent.com",  // For Expo Go
    webClientId: "YOUR_WEB_CLIENT_ID.apps.googleusercontent.com",    // For Web builds
    iosClientId: "YOUR_IOS_CLIENT_ID.apps.googleusercontent.com",    // For iOS standalone
    androidClientId: "YOUR_ANDROID_CLIENT_ID.apps.googleusercontent.com", // For Android standalone
  });

  useEffect(() => {
    const signInWithGoogleToken = async () => {
      if (response?.type === "success" && response.authentication?.idToken) {
        const { idToken } = response.authentication;

        // ✅ Create Firebase credential with Google ID token
        const credential = GoogleAuthProvider.credential(idToken);

        try {
          const userCredential = await signInWithCredential(auth, credential);
          console.log("✅ Google signed in:", userCredential.user.email);
        } catch (error) {
          console.error("❌ Google sign-in error:", error);
        }
      }
    };

    signInWithGoogleToken();
  }, [response]);

  return {
    request,
    response,
    promptAsync, // call this to trigger Google login
  };
};
