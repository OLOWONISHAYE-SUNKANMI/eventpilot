import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';


const { width, height } = Dimensions.get('window');

export default function calendar() {

      // Handle Back Button 
      const handleBackButton = () => {
        router.replace('/(tabs)/homepage');
      };

      const [selectedDate, setSelectedDate] = useState('');

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {/* Header image */}
        <TouchableOpacity onPress={handleBackButton} style={styles.backButton}>
          <Image source={require('../images/back_blue.png')} />
        </TouchableOpacity>

        {/* Header Text */}

        {/* Calendar Header */}
        <View style={styles.eventCalendarHeader}>
          <Text style={styles.eventCalendarHeaderText}>Event Calendar</Text>
        </View>

       
      </View>

       {/* Calendar Grid Section */}
        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={(day) => {
              setSelectedDate(day.dateString);
            }}
            markedDates={{
              [selectedDate]: {
                selected: true,
                marked: true,
                selectedColor: '#007BFF',
              },
            }}
            theme={{
              selectedDayBackgroundColor: '#007BFF',
              todayTextColor: '#00adf5',
              arrowColor: '#007BFF',
              textDayFontWeight: '500',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '600',
            }}
          />
          {selectedDate ? (
            <Text style={styles.selectedText}>Selected Date: {selectedDate}</Text>
          ) : null}
        </View>

        <View style={styles.eventListContainer}>
          <View style={styles.eventItem}>
      
              <Image
              source={require('../images/eventImageOne.png')}
              style={styles.eventItemImage}
            />
          
            
            <View style={styles.eventItemDetails}>
              <Text style={styles.eventItemHeader}>Training Session</Text>
             <View style={styles.eventItemTypeContainer}>
                 <Text style={styles.eventItemType}>Work</Text>
             </View>
              <View style={{ flexDirection: 'row', marginBottom: 3}}>
              <Image
                source={require('../images/mobile.png')}
              />
              <Text style={{ color: '#fff',}}>+ 120 going</Text>
              </View>
              <View style={ { flexDirection: 'row', marginBottom: 10 }}>
                <Image
                  source={require('../images/location.png')}
                />
              <View>
                <Text style={{ color: '#fff',  marginLeft: 10}}>17 Billings Way, Oregun,</Text>
                <Text style={{ color: '#fff',  marginLeft: 10}}>Ikeja 101233, Lagos</Text>
              </View>
                </View>
            </View>

          </View>       

        </View>

        <View style={styles.eventListContainer}>
               <View style={styles.eventItem}>
            <Image
              source={require('../images/eventImageTwo.png')}
               style={styles.eventItemImage}
            />
            <View style={styles.eventItemDetails}>
              <Text style={styles.eventItemHeader}>Product Launch</Text>
             <View style={styles.eventItemTypeContainer}>
                 <Text style={styles.eventItemType}>Work</Text>
             </View>
              <View style={{ flexDirection: 'row', marginBottom: 3}}>
              <Image
                source={require('../images/mobile.png')}
              />
              <Text style={{ color: '#fff'}}> + 120 going</Text>
              </View>
              <View style={ { flexDirection: 'row', marginBottom: 10 }}>
                <Image
                  source={require('../images/location.png')}
                />
                 <View>
                    <Text style={{ color: '#fff',  marginLeft: 10}}>17 Billings Way, Oregun,</Text>
                    <Text style={{ color: '#fff',  marginLeft: 10}}>Ikeja 101233, Lagos</Text>
              </View>
                </View>
            </View>
          </View>
        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({ 
       mainContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
         marginTop: 50,
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
    eventCalendarHeader: {
      marginLeft: 60,
      alignItems: 'center',
      justifyContent: 'center',
    },
    eventCalendarHeaderText: {
      fontSize: 24,
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 10,
    },
   calendarContainer: {
    marginTop: 30,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 10,
  },
  selectedText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: '500',
  },
  eventListContainer: {
    marginTop: 20,
    flexDirection: 'column',
    backgroundColor: '#2200FF',
    borderRadius: 20,
     marginLeft: 20,
     height: 150,
    marginRight: 10,
  },
  eventItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    marginRight: 10,
  },
  eventItemImage: {
    marginBottom: 40,
    width: 170,
    height: 150,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  eventItemDetails: {
    marginLeft: 10,
    marginBottom: 20,
  },
  eventItemHeader: { 
    marginTop: 2,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,

  },
  eventItemTypeContainer: {
    width: 50,
     padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20, 
    marginBottom: 10,
  },
  eventItemType: {
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },




 

})