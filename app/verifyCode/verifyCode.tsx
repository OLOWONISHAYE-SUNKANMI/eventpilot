import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const { width, height } = Dimensions.get('window');

export default function Login() {
  const router = useRouter();


  return (
    <ScrollView style={styles.container}>
        <View >
             <View style={styles.headerContent}>
                <View style={styles.iconContainer}>
                     <Ionicons name="calendar" size={20} color="white" />
                </View>
                <Text style={styles.headerText}>Verify Code</Text>
                <Text style={styles.headerSubtitle}>
                    Please enter the code we just sent to your email
                </Text>
                <Text style={styles.headerEmail}>
                    helloworld@gmail.com
                </Text>
            </View>

                    <View>
                        <TextInput 
                                                       
                        />
                        <TextInput
                        />
                        <TextInput
                        />
                        <TextInput
                        />
                    </View>

                    <View>
                        <Text>Didn't receive the code?</Text>
                        <Text>Resend Code</Text>
                    </View>

                    <TouchableOpacity>
                        <Text>Verify</Text>
                    </TouchableOpacity>
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
    headerEmail: {
        fontSize: 16,
        color: '#2200FF',
        padding: 5,
        textAlign: 'center',
    },
})