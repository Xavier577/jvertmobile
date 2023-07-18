import React from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';
import Styles from './styles';
import GlobalStyles from '../../theme/styles.global';
import {palette} from '../../theme/colors';

export function ConvertCurrencyScreen() {
  const isDark = useColorScheme() === 'dark';

  return (
    <View
      style={{
        ...GlobalStyles.rootView,
        ...Styles.screenRootView,
        backgroundColor: isDark ? palette.primaryDark : palette.primaryLight,
      }}>
      <Text
        style={{
          ...GlobalStyles.text,
          color: isDark ? palette.primaryLight : palette.primaryDark,
        }}>
        Convert currencies
      </Text>
    </View>
  );
}
