import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const {width, height} = Dimensions.get('window'); 

export default function auth() {

  const router = useRouter();

  const handleEmailLogin = () => {
    // Handle email login logic here
    router.replace("/login/login")
  }
  const handleGoogleLogin = () => {
    // Handle Google login logic here

  }
  const handleAppleLogin = () => {
    // Handle Apple login logic here
  }


  return (
    <View>
      <View>
          <Image style={styles.images} source={require('./images/background.png')} />
      </View>

    <ScrollView>
      <View style={styles.content}>
        <Text style={styles.title}>Let's Get Started</Text>
        <Text style={styles.subtitle}>Sign up or login to manage reminders and stay on track</Text>
      </View>

      <View style={styles.content}>

        <TouchableOpacity 
        onPress={handleEmailLogin}
        style={styles.emailButton}>
          <Ionicons name="mail" size={24} color="white" />
          <Text style={styles.buttonText}>Continue with Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton}>
          <Ionicons name="logo-google" size={24} color="white" />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.appleButton}>
          <Ionicons name="logo-apple" size={24} color="white" />
          <Text style={styles.buttonText}>Continue with Apple</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.content}>
        <Text style={styles.textTitle}>By Signing up or logging in, I accept the EventPilot</Text>
        <Text style={styles.textSubtitle}>Terms of Service and Privacy Policy</Text>
      </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  images: {
    width: width * 1,
    height: height * 0.4,
    resizeMode: 'stretch',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#C4C4C4',
    padding: 10,
    textAlign: 'center',
  },
  emailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2200FF',   
    paddingLeft: 70,
    paddingRight: 100,
    paddingVertical: 15,
    borderRadius: 10,
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
  textTitle: {
    fontSize: 14,
    color: '#C4C4C4',
    textAlign: 'center',
    marginTop: 20,
  },
  textSubtitle: {
    fontSize: 14,
    color: '#2200FF',
    textAlign: 'center',
  },
});
