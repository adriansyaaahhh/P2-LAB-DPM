import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DimensionExample from './src/textdanbox';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="TextandBox" component={DimensionExample} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}