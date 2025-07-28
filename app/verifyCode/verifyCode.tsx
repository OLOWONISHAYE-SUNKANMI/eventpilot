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

            <View style={styles.inputContainer}>
                        <TextInput style={{ 
                        width: width - 320, 
                        height: 70, 
                        backgroundColor: '#C4C4C4',  
                        borderRadius: 8, 
                        paddingHorizontal: 10,
                        marginTop: 20,
                        textAlign: 'center',
                        fontSize: 24,
                        fontWeight: 'bold',
                    }}
                                                       
                        />
                        <TextInput style={{ 
                        width: width - 320, 
                        height: 70, 
                        backgroundColor: '#C4C4C4',  
                        borderRadius: 8, 
                        paddingHorizontal: 10,
                        marginTop: 20,
                        textAlign: 'center',
                        fontSize: 24,
                        fontWeight: 'bold',
                    }}
                        />
                        <TextInput style={{ width: width - 320,
                        height: 70,
                        backgroundColor: '#C4C4C4',  
                        borderRadius: 8, 
                        paddingHorizontal: 10,
                        marginTop: 20,
                        textAlign: 'center',
                        fontSize: 24,
                        fontWeight: 'bold',

                            
                    }}
                        />
                        <TextInput style={{ width: width - 320, 
                        height: 70, 
                        backgroundColor: '#C4C4C4',  
                        borderRadius: 8, 
                        paddingHorizontal: 10,
                        marginTop: 20, 
                        textAlign: 'center',
                        fontSize: 24,
                        fontWeight: 'bold'
                    }}
                        />
            </View>

                    <View style={styles.headerSubtitle}>
                        <Text style={styles.headerCodeText}>Didn't receive the code?</Text>
                        <TouchableOpacity style={styles.resendButton}>
                                <Text style={styles.resendButtonText}>Resend code</Text>    
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.verifyButton}>
                        <Text style={styles.verifyButtonText}>Verify</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
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
    inputContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    headerCodeText: {
        fontSize: 16,
        color: '#C4C4C4',
        padding: 10,
        textAlign: 'center',
    },
    resendButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    resendButtonText: {
        color: '#2200FF',
        fontSize: 16,
    },
    verifyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2200FF',   
        paddingVertical: 20,
        borderRadius: 10,
    },
    verifyButtonText: {
        color: 'white',
        fontSize: 16,
    }
})