import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from '../screens/settings';
import AppDefaultTabs from './tabs';

export type RootStackParamList = {
  Settings: any;
  Home: any;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name={'Home'} component={AppDefaultTabs} />
        <RootStack.Screen
          name={'Settings'}
          component={SettingsScreen}
          options={{
            headerShown: true,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
