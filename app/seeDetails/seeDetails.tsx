import { router } from 'expo-router';
import React from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');
export default function seeDetails() {

       // Handle Back Button 
    const handleBackButton = () => {
      router.replace('/(tabs)/homepage');
    };

  return (

 

    <ScrollView>
        <View>
          <ImageBackground
             source={require('../images/seeDetailsBackground.png')}
              style={styles.background}
          >

          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
              <Image 
                  style= {{ width: 25, height: 25}}
                  source={require('../images/backaArrow.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.bookmarkButton}>
               <Image 
                    style= {{ width: 25, height: 25}}
                    source={require('../images/bookMark.png')}
                  />
            </TouchableOpacity>
          </View>

          <View style={styles.bodyContainer}>
              <Text style={styles.bodyText}>Annual General Meeting (AGM)</Text>
         </View>

        </ImageBackground>

        <View style={styles.inviteContainer}>
        <Image
            source={require('../images/mobile.png')}
            style={{ marginTop: 20, marginRight: 10,}}
          />
          <Text style={{ marginRight: 130, color: '#2200FF', marginTop: 20,}}>+120 going</Text>
          <View>
            <TouchableOpacity style={styles.inviteButton}>
              <Text style={{ color: '#FFFFFf'}}>Invite</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contentDetailsContainer}>
            <View style={{ alignItems: 'center', justifyContent: 'center'}}>
               <Image 
                source={require('../images/calendar_on.png')}
               style={{ 
                  width: 35, height: 35,
                  backgroundColor: 'rgba(221, 221, 221, 0.5)',
                  borderRadius: 10,
                  alignItems: 'center',
                  padding: 10,
                  justifyContent: 'center',
                }}
               />
               <Text
                style={{
                  fontWeight: 'bold', 
                  fontSize: 16,
                  marginTop: 10,
                  color: '#000000',
                  marginBottom: 5,
                  }}
               >
                10th June 2025
              </Text>
               <Text style={{ 
                  fontSize: 15, 
                  color: '#C4C4C4', 
                  marginTop: 5, 
                  marginBottom: 5              
                }}
                >
                  Tuesday
                </Text>
               <Text
               style={{ 
                  fontSize: 15, 
                  color: '#C4C4C4', 
                  marginTop: 5, 
                  marginBottom: 5              
                }}
               >4:00PM - 6:00PM </Text>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center'}}>
               <Image 
               source={require('../images/location_on.png')} 
                style={{ 
                  width: 35, height: 35,
                  backgroundColor: 'rgba(221, 221, 221, 0.5)',
                  borderRadius: 10,
                  alignItems: 'center',
                  padding: 10,
                  justifyContent: 'center',
                }}
               />
               <Text
                style={{
                  fontWeight: 'bold', 
                  fontSize: 16,
                  marginTop: 10,
                  color: '#000000',
                  marginBottom: 5,
                  }}
               >
                Gala Center
                </Text>

               <Text
                style={{ 
                  fontSize: 16, 
                  color: '#C4C4C4', 
                  marginTop: 5, 
                  marginBottom: 5              
                }}
               >35 Build Street,</Text>
               <Text
               style={{ 
                  fontSize: 16, 
                  color: '#C4C4C4', 
                  marginTop: 5, 
                  marginBottom: 5              
                }}
               >
                London, UK  
              </Text>
            </View>
        </View>

        <View style={{ margin: 20,}}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>About Event</Text>
          <Text style={{ textAlign: 'justify', fontSize: 14, color: '#C4C4C4'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
        </View>

           
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
     background: {
    width: width * 1,
    height: height * 0.4,
    resizeMode: 'stretch',
  },
   menuContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
         marginTop: 80,
  },
   backButton: {
   width: 50,
    height: 50,
    backgroundColor: 'rgba(221, 221, 221, 0.5)',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  bookmarkButton: {
     width: 50,
    height: 50,
    backgroundColor: 'rgba(221, 221, 221, 0.5)',
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  bodyContainer: {
    width: 370,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 170,
    padding: 20,

       // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Android Shadow
    elevation: 5,
  },
  bodyText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  inviteContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    padding: 10,
   },
  inviteButton: {
    marginTop: 20,
    marginRight: 60,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2200FF',
    borderRadius: 10,
  },

  contentDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    padding: 10,
  }

})