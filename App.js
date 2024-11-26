import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import tugas2Example from './src/tugas2';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="tugas2" component={tugas2Example} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}