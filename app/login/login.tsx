import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Dimensions, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// ✅ Firebase Imports
import { signInWithApple } from '../../firebase/appleAuth';
import { loginWithEmail } from '../../firebase/authService';
import { useGoogleAuth } from '../../firebase/googleAuth';

const { width, height } = Dimensions.get('window');

export default function Login() {
  const router = useRouter();

  // ✅ State for form inputs
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false); // 👈 Add state for password visibility

  // ✅ Google Auth Hook
  const { promptAsync: googleSignIn } = useGoogleAuth();

  // ✅ Handle Email/Password Login
  const handleEmailLogin = async () => {
    if (!email || !password) {
      Alert.alert('Missing Fields', 'Please enter email and password');
      return;
    }

    try {
      const user = await loginWithEmail(email, password);
      console.log('✅ Logged in:', user.email);
      router.replace('/homepage'); // ✅ Navigate after login
    } catch (err: any) {
      Alert.alert('Login Error', err.message);
    }
  };

  // ✅ Handle Google Login
  const handleGoogleLogin = async () => {
    googleSignIn(); // ✅ Triggers Google login flow
  };

  // ✅ Handle Apple Login (iOS only)
  const handleAppleLogin = async () => {
    try {
      await signInWithApple();
      router.replace('/homepage');
    } catch (err) {
      console.log('❌ Apple Sign-In error:', err);
    }
  };

  // ✅ Handle Signup Navigation
  const handleSignupButton = () => {
    router.replace('/signup/signup');
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        {/* HEADER */}
        <View style={styles.headerContent}>
          <View style={styles.iconContainer}>
            <Ionicons name="calendar" size={20} color="white" />
          </View>
          <Text style={styles.headerText}>Welcome Back</Text>
          <Text style={styles.headerSubtitle}>
            Log in to manage your reminders and stay on track.
          </Text>
        </View>

        {/* FORM */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.inputEmail}
            placeholderTextColor="#C4C4C4"
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={{ position: 'relative' }}>
            <TextInput
              style={styles.inputPassword}
              placeholderTextColor="#C4C4C4"
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 20,
                top: 25,
              }}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color="#2200FF"
                paddingTop={5}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Forgot Password */}
        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.forgetPasswordButton}>
            <Text style={styles.forgetPasswordText}>Forget Password?</Text>
          </TouchableOpacity>
        </View>

        {/* EMAIL LOGIN BUTTON */}
        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleEmailLogin}>
            <Text style={styles.loginButtonText}>Sign in</Text>
          </TouchableOpacity>
        </View>

        {/* SOCIAL LOGINS */}
        <View style={styles.formContainer}>
          <Text style={styles.textContent}>or login with</Text>

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

          {/* Signup Navigation */}
          <TouchableOpacity style={styles.signupButton} onPress={handleSignupButton}>
            <Text style={styles.signupButtonText}>Don't have an account? Sign up</Text>
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
        marginTop: 20,
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
        marginTop: 15,
        marginBottom: 15,
    },
    forgetPasswordButton: {
        alignItems: 'flex-end',
        marginBottom: 20,
        color: '#2200FF',
    },
    forgetPasswordText: {
        color: '#2200FF',
        fontSize: 16,
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