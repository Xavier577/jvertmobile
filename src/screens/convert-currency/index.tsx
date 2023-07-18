import React from 'react';
import {Pressable, Text, useColorScheme, View} from 'react-native';
import Styles from './styles';
import GlobalStyles from '../../theme/styles.global';
import {palette} from '../../theme/colors';

const keypadNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export function ConvertCurrencyScreen() {
  const isDark = useColorScheme() === 'dark';

  // const [data, error, isDataReady] = useFetch(fetchSupportedCurrencies());

  return (
    <View
      style={{
        ...GlobalStyles.rootView,
        ...Styles.screenRootView,
        backgroundColor: isDark ? palette.primaryDark : palette.primaryLight,
      }}>
      <View>
        {keypadNumbers.map((number, idx) => (
          <View key={`${idx}:${number}`}>
            <Pressable>
              <Text>{number}</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}
