import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../root-navigator';
import {ConvertCurrencyScreen} from '../../screens/convert-currency';
import RateTableScreen from '../../screens/rate-table';
import TopCurrenciesScreen from '../../screens/top-currencies';
import SettingsScreen from '../../screens/settings';
import {TabBarIconProps} from '../../types';
import AppTabIcons, {AppTabIconNames} from '../../components/app-tab-icons';

export const RootTab = createBottomTabNavigator<RootStackParamList>();
const renderAppTabIcon = (name: AppTabIconNames) => {
  return function TabIcon(props: TabBarIconProps) {
    return <AppTabIcons name={name} {...props} />;
  };
};

export default function AppDefaultTabs() {
  return (
    <RootTab.Navigator
      initialRouteName={'ConvertCurrency'}
      screenOptions={{headerShown: false}}>
      <RootTab.Screen
        name={'RateTable'}
        component={RateTableScreen}
        options={{tabBarLabel: '', tabBarIcon: renderAppTabIcon('rate-table')}}
      />
      <RootTab.Screen
        name={'ConvertCurrency'}
        component={ConvertCurrencyScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: renderAppTabIcon('currency-convert'),
        }}
      />
      <RootTab.Screen
        name={'TopCurrencies'}
        component={TopCurrenciesScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: renderAppTabIcon('top-currency'),
        }}
      />
      <RootTab.Screen
        name={'Settings'}
        component={SettingsScreen}
        options={{tabBarLabel: '', tabBarIcon: renderAppTabIcon('settings')}}
      />
    </RootTab.Navigator>
  );
}
