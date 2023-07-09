/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from './src/FirstScreen';
import DetailScreen from './src/DetailScreen';
import { View } from 'react-native';



type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();

function App(): JSX.Element {



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Top 100">
        <Stack.Screen name="Top 100"
          component={FirstScreen}
        />
        <Stack.Screen name="Detail"
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;