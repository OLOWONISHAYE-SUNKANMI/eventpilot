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

      <View style={styles.settingsContainer}>

        <View style={{ marginBottom: 20 }}>
            <Text style={styles.textHeader}>GENERAL</Text>
        </View>

        <View style={styles.settingsList}>
          <TouchableOpacity style={styles.settingsItem}>
             <Ionicons name="person-circle" size={24} color="#2200ff" />
             <Text style={styles.settingsText}>Profile</Text>
             <Ionicons name="chevron-forward" size={24} color="#2200ff" />
        </TouchableOpacity>

            <TouchableOpacity style={styles.settingsItem}>
             <Ionicons name="notifications" size={24} color="#2200ff" />
             <Text style={styles.settingsText}>Notification</Text>
             <Ionicons name="chevron-forward" size={24} color="#2200ff" />
        </TouchableOpacity>

            <TouchableOpacity style={styles.settingsItem}>
             <Ionicons name="log-out" size={24} color="#2200ff" />
             <Text style={styles.settingsText}>Logout</Text>
             <Ionicons name="chevron-forward" size={24} color="#2200ff" />
        </TouchableOpacity>

            <TouchableOpacity style={styles.settingsItem}>
             <Ionicons name="trash-bin" size={24} color="#2200ff" />
             <Text style={styles.settingsText}>Delete Account</Text>
             <Ionicons name="chevron-forward" size={24} color="#2200ff" />
        </TouchableOpacity>


        </View>


        <View style={styles.settingsContainer}> 
          <View style={{ marginBottom: 20, marginTop: 20 }}>
            <Text style={styles.textHeader}>FEEDBACK</Text>
          </View>

          <View style={styles.settingsList}>
              <TouchableOpacity style={styles.settingsItem}>
             <Ionicons name="bug-outline" size={24} color="#2200ff" />
             <Text style={styles.settingsText}>Report a bug</Text>
             <Ionicons name="chevron-forward" size={24} color="#2200ff" />
        </TouchableOpacity>

            <TouchableOpacity style={styles.settingsItem}>
             <Ionicons name="book-outline" size={24} color="#2200ff" />
             <Text style={styles.settingsText}>Send Feedback</Text>
             <Ionicons name="chevron-forward" size={24} color="#2200ff" />
        </TouchableOpacity>

          </View>

        

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
    settingsContainer: {
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
    },
    textHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#B3B3B3',
      marginBottom: 10,
    },
    settingsList: {
      flexDirection: 'column',
    },
    settingsItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
    },
    settingsText: {
      fontSize: 18,
      color: '#2200FF',
      textAlign: 'left', 
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      fontWeight: 'bold',  
    }

})