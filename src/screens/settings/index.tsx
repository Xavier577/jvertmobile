import React from 'react';
import {Text, useColorScheme, View} from 'react-native';
import GlobalStyles from '../../theme/styles.global';
import {palette} from '../../theme/colors';

export default function SettingsScreen() {
  const isDark = useColorScheme() === 'dark';
  return (
    <View
      style={{
        ...GlobalStyles.rootView,
        backgroundColor: isDark ? palette.primaryDark : palette.primaryLight,
      }}>
      <Text
        style={{
          ...GlobalStyles.text,
          color: isDark ? palette.primaryLight : palette.primaryDark,
        }}>
        Settings
      </Text>
    </View>
  );
}
