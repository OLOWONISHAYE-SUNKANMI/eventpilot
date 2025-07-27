import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const {width, height} = Dimensions.get('window'); 


export default function onboarding() {
  const router = useRouter();

  const handleDone = () => {
    router.replace("/auth");
  }

  const doneButton = ({...props}) => {
    return (
          <TouchableOpacity style={styles.doneButton} {...props}>
             <Text style={{ color: '#fff' }}>Get Started</Text>
        </TouchableOpacity>
    )
  }
    
  

  return (

    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone} 
        bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
         containerStyles={{ paddingHorizontal: 15 }}
        pages={[
            {
            backgroundColor: '#fff',
            image: (
                <View style={styles.images}>
                  <Image source={require('../images/vector_png.png')} />
                </View>
            ),
            title: 'Welcome to EventPilot',
            subtitle: 'Your all-in-one secure event reminder system',
            },
            {
            backgroundColor: '#fff',
            image: (
                <View>
                     <Image source={require('../images/vector_pngs.png')} />
                </View>
            ),
            title: 'Create Reminders',
            subtitle: 'Let us you create your first reminder',
            },
            
        ]}
        />
    </View>
    
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    images: {
      width: width*0.8,
      height: width,
    },
    doneButton: {
      padding: 20,
      backgroundColor: '#2200FF',
      paddingRight: 30,
      paddingLeft: 30,
      marginRight: 20,
      borderRadius: 10
    },
})