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
              style={{ width: '100%', height: 180, borderRadius: 20,  }}
            >
              <View style={styles.imageBackgroundTextContainer}>
                <Text style={styles.imageBackgroundText}>Annual General Meeting</Text> 
              </View>

              <TouchableOpacity style={styles.imageBackgroundButton}>
                  <Text style={styles.imageBackgroundButtonText}>Set Reminder</Text>
                </TouchableOpacity>
            </ImageBackground>
          </View>
{/* 
            <View style={styles.trendingContainer}>
              <Text style={styles.trendingText}>Trending</Text>
              <View style={styles.trendingEventContainer}>
                  <View>
                      <ImageBackground
                        source={require('./images/img_group.png')}
                        style={{ width: '75%', height: 180, borderRadius: 20,  }}
                      >
                          <View>
                              <Text>05</Text>
                              <Text>APR</Text>
                          </View>
                      </ImageBackground>
                  </View>

                  <View>
                      <Text>Training Session</Text>
                  </View>

                  <View>
                    <Image 
                      source={require('./images/Group 1.png')}
                    />
                    <Text>+ 120 going</Text>
                  </View>

                  <View>
                      <Ionicons name='map' size={24} color="grey"/>
                      <Text>17 Billings Way, Oregun, Ikeja 101233, Lagos</Text>
                  </View>

                  <View>
                      <Ionicons name='time' size={24} color="grey"/>
                      <Text>12:00 PM</Text>
                  </View>

                  
              <TouchableOpacity style={styles.imageBackgroundButton}>
                  <Text style={styles.imageBackgroundButtonText}>Set Reminder</Text>
                </TouchableOpacity>

                  <View style={styles.trendingEventContainer}>
                  <View>
                      <ImageBackground
                        source={require('./images/img_group.png')}
                        style={{ width: '75%', height: 180, borderRadius: 20,  }}
                      >
                          <View>
                              <Text>05</Text>
                              <Text>APR</Text>
                          </View>
                      </ImageBackground>
                  </View>

                  <View>
                      <Text>Training Session</Text>
                  </View>

                  <View>
                    <Image 
                      source={require('./images/Group 1.png')}
                    />
                    <Text>+ 120 going</Text>
                  </View>

                  <View>
                      <Ionicons name='map' size={24} color="grey"/>
                      <Text>17 Billings Way, Oregun, Ikeja 101233, Lagos</Text>
                  </View>

                  <View>
                      <Ionicons name='time' size={24} color="grey"/>
                      <Text>12:00 PM</Text>
                  </View>

                  
              <TouchableOpacity style={styles.imageBackgroundButton}>
                  <Text style={styles.imageBackgroundButtonText}>Set Reminder</Text>
                </TouchableOpacity>
              </View>

              </View>

            </View> */}
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
  trendingEventContainer : {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  }
})