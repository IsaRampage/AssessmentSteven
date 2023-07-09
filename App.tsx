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
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detail"
          component={DetailScreen}
          options={{
            headerBackTitleVisible: false,
            headerTitle: '',
            headerStyle: { backgroundColor: '#f0f0f0' }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;