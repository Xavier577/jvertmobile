import React from 'react';
import {useColorScheme, View} from 'react-native';
import GlobalStyles from '../../theme/styles.global';
import Styles from './styles';
import {palette} from '../../theme/colors';
import SettingOption from './components/setting-option';

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  return (
    <View
      style={{
        ...GlobalStyles.rootView,
        ...Styles.screenRootView,
        backgroundColor: isDark ? palette.primaryDark : palette.primaryLight,
      }}>
      <SettingOption
        colorMode={colorScheme}
        optionText={'Appearance'}
        optionDescriptionText={'Choose your light or dark theme preference'}
      />
    </View>
  );
}
