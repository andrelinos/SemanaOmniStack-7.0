import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Feed from '../src/pages/Feed';
import New from '../src/pages/New';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Feed" component={Feed} />
        <AppStack.Screen name="New" component={New} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}