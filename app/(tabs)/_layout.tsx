import { Ionicons } from '@expo/vector-icons'; // Make sure it's installed
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2200FF',
        tabBarInactiveTintColor: 'gray',
         tabBarStyle: {
          backgroundColor: '#fff',
          height: 70,
          paddingTop: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="homepage"
        options={{
          headerShown: false,
          tabBarShowLabel: false, // Hide Tab Bar Label
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

       <Tabs.Screen
        name="calendar"
        options={{
          headerShown: false,
          tabBarShowLabel: false, // Hide Tab Bar Label
          tabBarStyle: { display: 'none' }, // hides the tab bar
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />

        <Tabs.Screen
        name="createEvent"
        options={{
          headerShown: false,
          tabBarShowLabel: false, // Hide Tab Bar Label
          tabBarStyle: { display: 'none' }, // hides the tab bar
          tabBarIcon: () => (
            <View
              style={{ backgroundColor: '#2200FF', borderWidth: 3, alignItems: 'center', justifyContent: 'center',
                borderColor: '#fff', width: 70, height: 70, borderRadius: 20, marginBottom: 25, marginLeft: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                // Android Shadow
                elevation: 5,
                }}
            >
                <Ionicons name="add" size={30} color='white' />
            </View>
          
          ),
        }}
      />

       <Tabs.Screen
        name="assignMembers"
        options={{
          headerShown: false,
          tabBarShowLabel: false, // Hide Tab Bar Label
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-circle-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          tabBarShowLabel: false, // Hide Tab Bar Label
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
