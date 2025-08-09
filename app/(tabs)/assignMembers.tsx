import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function assignMembers() {
  // Track selected members by index
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  // Handle Back Button 
  const handleBackButton = () => {
    router.replace('/(tabs)/homepage');
  };

  // Toggle member selection
  const handleSelect = (key: string) => {
    setSelected((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Handle Add Members
  const handleAddMembers = () => {
    Alert.alert('Members added');
  };

  // Helper to render a row of members
  const renderMemberRow = (rowIdx: number) => {
    const images = [
      require('../images/Group 2.png'),
      require('../images/Group 3.png'),
      require('../images/Group 4.png'),
      require('../images/Group 2.png'),
      require('../images/Group 3.png'),
    ];
    return (
      <View style={styles.memberContainer} key={rowIdx}>
        {images.map((img, idx) => {
          const key = `${rowIdx}-${idx}`;
          const isSelected = selected[key];
          return (
            <TouchableOpacity
              key={key}
              onPress={() => handleSelect(key)}
              style={[
                styles.memberCircle,
                isSelected && styles.selectedCircle,
              ]}
              activeOpacity={0.7}
            >
              <Image source={img} style={styles.memberImage} />
              {isSelected && (
                <View style={styles.checkMarkContainer}>
                  <Ionicons
                    name="checkmark"
                    size={16}
                    style={styles.checkMark}
                  />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={handleBackButton} style={styles.backButton}>
          <Image source={require('../images/backaArrow.png')} />
        </TouchableOpacity>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Assign Members</Text>
        </View>
        <TouchableOpacity style={styles.notifyButton}>
          <Image source={require('../images/notify.png')} />
        </TouchableOpacity>
      </View>

      {/* Render 6 rows as before */}
      {Array.from({ length: 6 }).map((_, idx) => renderMemberRow(idx))}

      <TouchableOpacity style={styles.addMemberButton} onPress={handleAddMembers}>
        <Text style={styles.addMemberText}>Add Members</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2200FF',
  },
  backButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#2200ff',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
  },
  notifyButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#2200ff',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
  },
  memberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  memberCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'transparent',
    position: 'relative',
  },
  selectedCircle: {
    borderColor: '#2200FF',
  },
  memberImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  checkMarkContainer: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 2,
  },
  checkMark: {
    width: 16,
    height: 16,
    tintColor: '#2200FF',
  },
  addMemberButton: {
    backgroundColor: '#2200FF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  addMemberText: {
    color: '#FFFFFF',
  },
});