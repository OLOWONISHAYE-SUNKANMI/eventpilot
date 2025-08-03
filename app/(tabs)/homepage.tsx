import React from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function homepage() {
  return (
   <ScrollView>
      <View>
            <ImageBackground 
          source={require('../images/background.png')} 
          style={styles.background}
        >

        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuButton}>
            <Image 
              style= {{ width: 25, height: 25}}
              source={require('../images/menu.png')}
              />
          </TouchableOpacity>

          <TouchableOpacity style={styles.notificationButton}>
            <Image
              source={require('../images/notify.png')}
              style= {{ width: 25, height: 25}}
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
              source={require('../images/search.png')}
            />
            </TextInput>
          </View>
        </View>

        
          <View style={styles.imageBackgroundContainer}>
            <ImageBackground
               source={require('../images/event_background.png')}
              style={{ width: '100%', height: 150, borderRadius: 20,  }}
            >
              <View style={styles.imageBackgroundTextContainer}>
                <Text style={styles.imageBackgroundText}>Annual General Meeting</Text> 
              </View>

              <TouchableOpacity style={styles.imageBackgroundButton}>
                  <Text style={styles.imageBackgroundButtonText}>Set Reminder</Text>
                </TouchableOpacity>
            </ImageBackground>
          </View>
 
          <View style={styles.trendingEventContent}>
                <View style={styles.trendingEventContainer}>
                    <Image
                       source={require('../images/img_group.png')}
                      style={{ width: 220, height: 120, borderRadius: 15, margin: 5 }}
                    />
                    <View style={styles.eventContainerSection}>
                        <Text style={styles.eventContainerSectionText}>Training Session</Text>
                       <View style={styles.attendantContainer}>
                            <Image
                           source={require('../images/mobile.png')}
                           style={{marginLeft: 10}}
                            />
                            <Text style={styles.attendantContainerText}>+ 120 going</Text>
                        </View>

                        <View style={styles.eventDetailsContainer}> 
                          <Image source={require('../images/location.png')}
                          style={{marginLeft: 10}}
                          />
                          <Text style={styles.eventDetailsText}>17 Billings Way, Oregun, Ikeja 101233, Lagos</Text>
                        </View>

                        <View style={styles.eventDateContainer}>
                            <Image source={require('../images/time.png')}
                            style={{marginLeft: 10}}
                          />
                          <Text style={styles.eventDetailsText}> 12:00 PM</Text>
                        </View>

                        <TouchableOpacity style={styles.eventDetailsButton}>
                            <Text style={styles.eventDetailsButtonText}>Set reminder</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                 <View style={styles.trendingEventContainer}>
                    <Image
                       source={require('../images/img_background.png')}
                      style={{ width: 220, height: 120, borderRadius: 15, margin: 5 }}
                    />
                     <View style={styles.eventContainerSection}>
                        <Text style={styles.eventContainerSectionText}>Product Launch</Text>
                        <View style={styles.attendantContainer}>
                            <Image
                              source={require('../images/mobile.png')}
                              style={{marginLeft: 10}}
                            />
                            <Text style={styles.attendantContainerText}>+ 120 going</Text>
                        </View>
                    </View>

                       <View style={styles.eventDetailsContainer}>
                          <Image source={require('../images/location.png')}
                          style={{marginLeft: 10}}
                          />
                          <Text style={styles.eventDetailsText}>17 Billings Way, Oregun, Ikeja 101233, Lagos</Text>
                        </View>

                        <View style={styles.eventDateContainer}>
                            <Image source={require('../images/time.png')}
                            style={{marginLeft: 10}}
                          />
                          <Text style={styles.eventDetailsText}>12:00 PM</Text>
                        </View>

                        <TouchableOpacity style={styles.eventDetailsButton}>
                            <Text style={styles.eventDetailsButtonText}>Set reminder</Text>
                        </TouchableOpacity>
                    
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
    marginTop: 50,
  },
  searchContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  imageBackgroundContainer: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden'
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
    marginTop: 10,
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
  },
  trendingContainer:  {
      paddingTop: 20,
      paddingLeft: 10,
  },
  trendingText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  trendingEventContent: {
    flex: 1,
    flexDirection: 'row'
  },
  trendingEventContainer : {
    width: 230, 
    height: 300,
    backgroundColor: '#ffff',
    borderRadius: 15,
    margin: 10,

     // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Android Shadow
    elevation: 5,
  },
  eventContainerSection: {
    margin: 5,
  },
  eventContainerSectionText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 10,
      color: '#000',
      marginBottom: 10,
  },
  attendantContainer: {
    flexDirection: 'row'
  },
  eventDetailsContainer: { 
    flexDirection: 'row',
    marginTop: 10,
  },
  eventDateContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  attendantContainerText: {
    marginLeft: 5,
    color: '#C4C4C4',
  },
  eventDetailsText: {
    marginLeft: 5,
    color: '#C4C4C4',
    marginRight: 30,
  },
  eventDetailsButton:{
    marginTop: 10,
    padding: 15,
    backgroundColor: '#2200FF',
    marginLeft: 10, 
    marginRight: 20,
    borderRadius: 10,
    width: 130,
  },
  eventDetailsButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center'
  },


})