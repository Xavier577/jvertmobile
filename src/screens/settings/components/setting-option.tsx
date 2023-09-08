import {Text, View} from 'react-native';
import React from 'react';
import SettingOptionStyles from './setting-option.styles';
import {palette} from '../../../theme/colors';

export type SettingOptionProps = {
  colorMode?: 'light' | 'dark' | null;
  optionText: string;
  optionDescriptionText?: string;
};

export default function SettingOption({
  colorMode = 'light',
  optionText,
  optionDescriptionText,
}: SettingOptionProps) {
  const isDark = colorMode === 'dark';

  return (
    <View style={SettingOptionStyles.optionView}>
      <Text
        style={{
          ...SettingOptionStyles.optionText,
          color: isDark
            ? palette.textColorDarkMode
            : palette.textColorLightMode,
        }}>
        {optionText}
      </Text>

      <Text
        style={{
          ...SettingOptionStyles.optionDescriptionText,
          color: isDark ? palette.textDimDarkMode : palette.textDimLightMode,
        }}>
        {optionDescriptionText}
      </Text>
    </View>
  );
}
