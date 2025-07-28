import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Dimensions, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// ✅ Firebase Imports
import { signInWithApple } from '../../firebase/appleAuth';
import { registerWithEmail } from '../../firebase/authService';
import { useGoogleAuth } from '../../firebase/googleAuth';

const { width, height } = Dimensions.get('window');

export default function Login() {
  const router = useRouter();

  // ✅ Local state for form
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // ✅ Google Auth Hook
  const { promptAsync: googleSignIn } = useGoogleAuth();

  // ✅ Handle Email/Password Signup
  const handleEmailSignup = async () => {
    if (!email || !password) {
      Alert.alert('Missing Fields', 'Please enter email and password');
      return;
    }

    try {
      const user = await registerWithEmail(email, password);
      console.log('✅ Signed up:', user.email);
      router.replace('/verifyCode/verifyCode'); // ✅ Navigate after signup
    } catch (err: any) {
      Alert.alert('Signup Error', err.message);
    }
  };

  // ✅ Handle Google Signup/Login
  const handleGoogleLogin = async () => {
    googleSignIn(); // ✅ This triggers Google login
  };

  // ✅ Handle Apple Sign-In
  const handleAppleLogin = async () => {
    try {
      await signInWithApple();
      router.replace('/homepage'); // ✅ Navigate after Apple login
    } catch (err) {
      console.log('❌ Apple Sign-In error:', err);
    }
  };

  // ✅ Handle "Already have account? Login"
  const handleLoginButton = () => {
    router.replace('/login/login');
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        {/* HEADER */}
        <View style={styles.headerContent}>
          <View style={styles.iconContainer}>
            <Ionicons name="calendar" size={20} color="white" />
          </View>
          <Text style={styles.headerText}>Hi, Welcome</Text>
          <Text style={styles.headerSubtitle}>
            Create account to manage your reminders and stay on track.
          </Text>
        </View>

        {/* FORM */}
        <View style={styles.formContainer}>
          <TextInput
            placeholderTextColor="#C4C4C4"
            style={styles.inputName}
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={setFullName}
          />

          <TextInput
            style={styles.inputEmail}
            placeholderTextColor="#C4C4C4"
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.inputPassword}
            placeholderTextColor="#C4C4C4"
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* SIGN UP BUTTON */}
        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleEmailSignup}>
            <Text style={styles.loginButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* SOCIAL LOGINS */}
        <View style={styles.formContainer}>
          <Text style={styles.textContent}>or sign up with </Text>

          {/* Google Login */}
          <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
            <Ionicons style={styles.buttonIcon} name="logo-google" size={24} color="white" />
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>

          {/* Apple Login (iOS only) */}
          {Platform.OS === 'ios' && (
            <TouchableOpacity style={styles.appleButton} onPress={handleAppleLogin}>
              <Ionicons style={styles.buttonIcon} name="logo-apple" size={24} color="white" />
              <Text style={styles.buttonText}>Continue with Apple</Text>
            </TouchableOpacity>
          )}

          {/* Already have an account? */}
          <TouchableOpacity style={styles.signupButton} onPress={handleLoginButton}>
            <Text style={styles.signupButtonText}>Already have an account? Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    headerContent: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
   
    iconContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        backgroundColor: '#2200FF',
        width: 60,
        height: 60,
        color: 'white',
        borderRadius: '50%',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2200FF',
        marginTop: 20,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#C4C4C4',
        padding: 10,
        textAlign: 'center',
    },
    formContainer: {
        marginTop: 10,
    },
    inputName: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
    },
    inputEmail: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
    },
    inputPassword: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
    },
    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2200FF',   
        paddingVertical: 20,
        borderRadius: 10,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
    },
    textContent: {
        textAlign: 'center',
        marginTop: 20,
        color: '#C4C4C4',
    },
    googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CD7B00',   
    marginTop: 20,
    paddingLeft: 65,
    paddingRight: 100,
    paddingVertical: 15,
    borderRadius: 10,
  },
   appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10015A',   
    marginTop: 20,
    paddingLeft: 65,
    paddingRight: 100,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 20,
  },
  buttonIcon: {
    marginRight: 10,
  },
    signupButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    signupButtonText: {
        fontSize: 14,
        color: '#2200FF',
        textAlign: 'center',
    }
    
})