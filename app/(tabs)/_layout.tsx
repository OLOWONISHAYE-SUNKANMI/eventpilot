import { Ionicons } from '@expo/vector-icons'; // Make sure it's installed
import { Tabs } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2200FF',
        tabBarInactiveTintColor: 'gray',
         tabBarStyle: {
          backgroundColor: '#fff',
          height: 70,
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
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" size={size} color={color} />
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
