import React from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const { width, height } = Dimensions.get('window');
export default function seeDetails() {
  return (
    <ScrollView>
        <View>
          <ImageBackground
             source={require('../images/seeDetailsBackground.png')}
              style={styles.background}
          >

          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.backButton}>
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
    marginRight: 40,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2200FF',
    borderRadius: 10,
  },



})