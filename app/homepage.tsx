import React from 'react';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function homepage() {
  return (
   <ScrollView>
      <View>
        <ImageBackground 
          source={require('./images/background.png')} 
          style={styles.background}
        >
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