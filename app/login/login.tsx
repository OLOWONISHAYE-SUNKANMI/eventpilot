import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const {width, height} = Dimensions.get('window');




export default function login() {

    const router = useRouter();

    const handleSignupButton = () => {
        // Navigate to signup screen
        router.replace("/signup/signup");
    }

  return (
    <ScrollView style={styles.container}>
        <View>
            <View style={styles.headerContent}>
                <View style={styles.iconContainer}>
                    <Ionicons name="calendar" size={20} color="white" />
                </View>
                <Text style={styles.headerText}>Welcome Back</Text>
                <Text style={styles.headerSubtitle}>Log in to manage your reminders and stay on track.</Text>
            </View>

            <View style={styles.formContainer}>
                <TextInput 
                style={styles.inputEmail} 
                placeholderTextColor="#C4C4C4"
                placeholder='Enter your email address'/>
                
                <TextInput style={styles.inputPassword} 
                 placeholderTextColor="#C4C4C4"
                placeholder='Enter your password'/>
            </View>

            <View style={styles.formContainer}>
                <TouchableOpacity style={styles.forgetPasswordButton}>
                    <Text style={styles.forgetPasswordText}>Forget Password?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.formContainer}>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Sign in</Text>
                </TouchableOpacity>
            </View>

            
            <View style={styles.formContainer}>
                <Text style={styles.textContent}>or login with</Text>
                 <TouchableOpacity style={styles.googleButton}>
                          <Ionicons style={styles.buttonIcon} name="logo-google" size={24} color="white" />
                          <Text style={styles.buttonText}>Continue with Google</Text>
                </TouchableOpacity>

                  <TouchableOpacity style={styles.appleButton} >
                          <Ionicons style={styles.buttonIcon} name="logo-apple" size={24} color="white" />
                          <Text style={styles.buttonText}>Continue with Apple</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signupButton} onPress={handleSignupButton}>
                    <Text style={styles.signupButtonText}>Don't have an account? Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  )
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