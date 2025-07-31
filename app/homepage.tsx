import React from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function homepage() {
  return (
   <ScrollView>
      <View>
            <ImageBackground 
          source={require('./images/background.png')} 
          style={styles.background}
        >

        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuButton}>
            <Image 
              source={require('./images/menu.png')}
              />
          </TouchableOpacity>

          <TouchableOpacity style={styles.notificationButton}>
            <Image
              source={require('./images/notify.png')}
              />
          </TouchableOpacity>
        </View>

        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}>Discover Amazing Events</Text>
          <View style={styles.searchContainer}>
            <TextInput
              style={{ 
                height: 50, 
                borderColor: 'gray', 
                borderWidth: 1, 
                borderRadius: 10, 
                paddingLeft: 10, 
                backgroundColor: '#FFFFFF' 
              }}
              placeholder='Find amazing events'
              placeholderTextColor='grey'
            >
               <Image
              source={require('./images/search.png')}
            />
            </TextInput>
          </View>
        </View>

        
          <View style={styles.imageBackgroundContainer}>
            <ImageBackground
               source={require('./images/event_background.png')}
              style={{ width: '100%', height: 170, borderRadius: 20,  }}
            >
              <View style={styles.imageBackgroundTextContainer}>
                <Text style={styles.imageBackgroundText}>Annual General Meeting</Text> 
              </View>

              <TouchableOpacity style={styles.imageBackgroundButton}>
                  <Text style={styles.imageBackgroundButtonText}>Set Reminder</Text>
                </TouchableOpacity>
            </ImageBackground>
          </View>

            <View>
              <Text>Trending</Text>
              <View>
              
              </View>
        </View>
        </ImageBackground>

      
         </View>
      
   </ScrollView>
  )
}

const styles = StyleSheet.create({
  background: {
    width: width * 1,
    height: height * 0.5,
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
  menuButton: {
    width: 50,
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  notificationButton: {
    width: 50,
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  bodyContainer: {
    margin: 10,
  },
  bodyText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    marginTop: 100,
  },
  searchContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  imageBackgroundContainer: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageBackgroundTextContainer:  {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
  },
  imageBackgroundText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 60,
  },
  imageBackgroundButton: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#2200FF',
     marginLeft: 20, 
    marginRight: 20,
    borderRadius: 10,
    width: 130,
  },
  imageBackgroundButtonText : {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center'
  }
})