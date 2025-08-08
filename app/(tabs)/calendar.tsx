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

        <View>
          <View>
            <Image
              source={require('../images/eventImageOne.png')}
            />
            <View>
              <Text>Training Session</Text>
              <Text>Work</Text>
              <View>
              <Image
                source={require('../images/mobile.png')}
              />
              <Text> + 120 going</Text>
              </View>
              <View>
                <Image
                  source={require('../images/location.png')}
                />
                <Text>17 Billings Way, Oregun, Ikeja 101233, Lagos</Text>
                </View>
            </View>
          </View>

          <View>
            <Image
              source={require('../images/eventImageTwo.png')}
            />
            <View>
              <Text>Product Launch</Text>
              <Text>Work</Text>
              <View>
              <Image
                source={require('../images/mobile.png')}
              />
              <Text> + 120 going</Text>
              </View>
              <View>
                <Image
                  source={require('../images/location.png')}
                />
                <Text>17 Billings Way, Oregun, Ikeja 101233, Lagos</Text>
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
})