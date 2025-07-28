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

        <View>
          <TouchableOpacity>
            <Image 
              source={require('./images/menu.png')}
              />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('./images/notify.png')}
              />
          </TouchableOpacity>
        </View>

        <View>
          <Text>Discover Amazing Events</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              placeholder='Find amazing events'
              placeholderTextColor='grey'
              style={{ flex: 1 }}
            >
               <Image
              source={require('./images/search.png')}
              style={{ width: 24, height: 24, marginLeft: 8 }}
            />
            </TextInput>
          </View>
        </View>

        
          <View>
            <ImageBackground
               source={require('./images/event_background.png')}
              style={{ width: '100%', height: 200,}}
            >
              <View>
                <Text>Annual General Meeting</Text>
                <Image
                  source={require('./images/bookmark_black.png')}
                />
                <TouchableOpacity>
                  <Text>Set Reminder</Text>
                </TouchableOpacity>
    
              </View>
            </ImageBackground>
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
  
})