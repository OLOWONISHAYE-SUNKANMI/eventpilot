import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

export default function CreateEvent() {

   const [image, setImage] = useState<string | null>(null)

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== 'granted') {
      alert('Permission to access media library is required!')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri) // This holds the image URI, you can send it to your backend
    }
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')

  const [isStartTimePickerVisible, setStartTimePickerVisibility] = useState(false)
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false)

  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')

  const showDatePicker = () => setDatePickerVisibility(true)
  const hideDatePicker = () => setDatePickerVisibility(false)

  const showStartTimePicker = () => setStartTimePickerVisibility(true)
  const hideStartTimePicker = () => setStartTimePickerVisibility(false)

  const showEndTimePicker = () => setEndTimePickerVisibility(true)
  const hideEndTimePicker = () => setEndTimePickerVisibility(false)

  const handleDateConfirm = (date: Date) => {
    const formatted = date.toLocaleDateString()
    setSelectedDate(formatted)
    hideDatePicker()
  }

  const handleStartTimeConfirm = (time: Date) => {
    const formatted = formatTime(time)
    setStartTime(formatted)
    hideStartTimePicker()
  }

  const handleEndTimeConfirm = (time: Date) => {
    const formatted = formatTime(time)
    setEndTime(formatted)
    hideEndTimePicker()
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <ScrollView>
      <View style={{ backgroundColor: '#D9D9D9'}}>
      <View style={styles.topMenuContainer}>
        <TouchableOpacity style={styles.backIconButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.eventHeaderText}>Create Event Reminder</Text>
      </View>
    </View>

      <View style={styles.formContainer}>
      <TextInput
        placeholder="Event Title"
        placeholderTextColor="#C4C4C4"
        style={styles.input}
      />

      <View style={styles.dateForm}>
        <TextInput
          placeholder="Date"
          placeholderTextColor="#C4C4C4"
          value={selectedDate}
          editable={false}
          style={styles.input}
        />
        <TouchableOpacity onPress={showDatePicker}>
          <Ionicons name="calendar-outline" size={24} color="#2200FF" />
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

      <TextInput
        placeholder="Location"
        placeholderTextColor="#C4C4C4"
        style={styles.input}
      />

      <View>
        <TextInput
          placeholder="Start Time"
          placeholderTextColor="#C4C4C4"
          value={startTime}
          editable={false}
        />
        <TouchableOpacity onPress={showStartTimePicker}>
          <Ionicons name="time-outline" size={24} color="#2200FF" />
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isStartTimePickerVisible}
        mode="time"
        onConfirm={handleStartTimeConfirm}
        onCancel={hideStartTimePicker}
      />

      <View>
        <TextInput
          placeholder="End Time"
          placeholderTextColor="#C4C4C4"
          value={endTime}
          editable={false}
        />
        <TouchableOpacity onPress={showEndTimePicker}>
          <Ionicons name="time-outline" size={24} color="#2200FF" />
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        isVisible={isEndTimePickerVisible}
        mode="time"
        onConfirm={handleEndTimeConfirm}
        onCancel={hideEndTimePicker}
      />

      <TextInput
        placeholder="Description"
        placeholderTextColor="#C4C4C4"
        multiline
      />

      <View>
        <TouchableOpacity onPress={pickImage}>
      <Text>Upload Photo</Text>
      </TouchableOpacity>
      </View>

      <View>
         <TouchableOpacity>
            <Text>Set Reminder</Text>
         </TouchableOpacity>
      </View>

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    topMenuContainer: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 60, 
        marginBottom: 20,
    },
    backIconButton: {
      padding: 10,
      marginRight: 10,
      backgroundColor: '#2200FF',
      marginLeft: 10,
      borderRadius: 10,
    },
    eventHeaderText: {
      fontSize: 20,
      marginLeft: 35,
      fontWeight: 'bold'
    },
    formContainer: {
      margin: 20,
    },
    input: {
      borderWidth: 1,
        borderColor: '#B3B3B3',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
    },
    dateForm: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }

})
