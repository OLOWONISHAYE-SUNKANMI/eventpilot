import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function settings() {

    // Handle Back Button 
        const handleBackButton = () => {
          router.replace('/(tabs)/homepage');
        };


  return (
      <ScrollView>
      <View style={{ backgroundColor: '#D9D9D9'}}>
      <View style={styles.topMenuContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
          <Ionicons name="arrow-back" size={24} color="#2200ff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>
    </View>

      <View>

        <View>
            <Text>GENERAL</Text>
        </View>

        <View>
             <TouchableOpacity>
             <Ionicons name="person-circle" size={24} color="#2200ff" />
             <Text>Profile</Text>
             <Ionicons name="chevron-forward" size={24} color="#2200ff" />
        </TouchableOpacity>

            <TouchableOpacity>
             <Ionicons name="notifications" size={24} color="#2200ff" />
             <Text>Notification</Text>
             <Ionicons name="chevron-forward" size={24} color="#2200ff" />
        </TouchableOpacity>

            <TouchableOpacity>
             <Ionicons name="log-out" size={24} color="#2200ff" />
             <Text>Logout</Text>
             <Ionicons name="chevron-forward" size={24} color="#2200ff" />
        </TouchableOpacity>

            <TouchableOpacity>
             <Ionicons name="trash-bin" size={24} color="#2200ff" />
             <Text>Delete Account</Text>
             <Ionicons name="chevron-forward" size={24} color="#2200ff" />
        </TouchableOpacity>


        </View>


        <View> 
          <View>
            <Text>FEEDBACK</Text>
          </View>

          <TouchableOpacity>
             <Ionicons name="bug-outline" size={24} color="#2200ff" />
             <Text>Report a bug</Text>
             <Ionicons name="chevron-forward" size={24} color="#2200ff" />
        </TouchableOpacity>

            <TouchableOpacity>
             <Ionicons name="book-outline" size={24} color="#2200ff" />
             <Text>Send Feedback</Text>
             <Ionicons name="chevron-forward" size={24} color="#2200ff" />
        </TouchableOpacity>

        </View>


      </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
   topMenuContainer: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 60, 
        marginBottom: 20,
    },
    backButton: {
      padding: 10,
      marginRight: 10,
      color: '#2200FF',
    },
    headerText: {
      fontSize: 28,
      marginLeft: 10,
      fontWeight: 'bold',
      color: '#2200FF',
    },
})