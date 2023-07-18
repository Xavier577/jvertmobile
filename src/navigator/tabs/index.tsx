import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ConvertCurrencyScreen} from '../../screens/convert-currency';
import RateTableScreen from '../../screens/rate-table';
import TopCurrenciesScreen from '../../screens/top-currencies';
import {TabBarIconProps} from '../../types';
import AppTabIcons, {AppTabIconNames} from '../../components/app-tab-icons';
import {palette} from '../../theme/colors';
import EmptyScreen from '../../components/empty-screen';

export type RootTabParamList = {
  RateTable: any;
  ConvertCurrency: any;
  TopCurrencies: any;
  SettingsRedirect: any;
  Home: any;
};

export const RootTab = createBottomTabNavigator<RootTabParamList>();
const renderAppTabIcon = (name: AppTabIconNames) => {
  return function TabIcon(props: TabBarIconProps) {
    return <AppTabIcons name={name} {...props} />;
  };
};

export default function AppDefaultTabs({navigation}: any) {
  return (
    <RootTab.Navigator
      initialRouteName={'ConvertCurrency'}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: palette.primary},
      }}>
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
        name={'SettingsRedirect'}
        component={EmptyScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: renderAppTabIcon('settings'),
        }}
        listeners={{
          tabPress: event => {
            event.preventDefault();
            navigation.navigate('Settings');
          },
        }}
      />
    </RootTab.Navigator>
  );
}
