import React from 'react';
import {Image, SafeAreaView, Text, useColorScheme, View} from 'react-native';
import Styles from './styles';
import GlobalStyles from '../../theme/styles.global';
import {palette} from '../../theme/colors';
import SwitchIcon from '../../assets/icons/switch_blue.svg';
import Keypad from './components/keypad';
import useFetch from '../../hooks/use-fetch';
import {fetchSupportedCurrencies} from '../../services/currencies';

export function ConvertCurrencyScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [data] = useFetch(fetchSupportedCurrencies());

  return (
    <SafeAreaView
      style={{
        ...GlobalStyles.safeAreaView,

        backgroundColor: isDark ? palette.primaryDark : palette.primaryLight,
      }}>
      <View
        style={{
          ...GlobalStyles.rootView,
          ...Styles.screenRootView,
          backgroundColor: isDark ? palette.primaryDark : palette.primaryLight,
        }}>
        <View style={Styles.currencyConversionScreenView}>
          <View style={Styles.exchangedOutputViewContainer}>
            <View style={Styles.exchangeOutputView}>
              <View>
                <Text
                  style={{
                    ...Styles.exchangeOutputValue,
                    color: isDark
                      ? palette.textColorDarkMode
                      : palette.textColorLightMode,
                  }}>
                  $20
                </Text>
              </View>
            </View>
          </View>

          <View style={Styles.currencySelectorView}>
            <View style={Styles.currencyFromSelector}>
              {data != null ? (
                <>
                  <Text
                    style={{
                      ...Styles.currencyName,
                      color: isDark
                        ? palette.textColorDarkMode
                        : palette.textColorLightMode,
                    }}>
                    {data?.supportedCurrenciesMap?.NGN?.currencyCode}
                  </Text>
                  <Image
                    style={Styles.currencyFlag}
                    source={{
                      uri: data?.supportedCurrenciesMap?.NGN?.icon,
                    }}
                  />
                </>
              ) : (
                <></>
              )}
            </View>

            <SwitchIcon width={30} height={30} />

            <View style={Styles.currencyToSelector}>
              {data != null ? (
                <>
                  <Text
                    style={{
                      ...Styles.currencyName,
                      color: isDark ? 'whitesmoke' : palette.primaryDark,
                    }}>
                    {data?.supportedCurrenciesMap?.USD?.currencyCode}
                  </Text>

                  <Image
                    style={Styles.currencyFlag}
                    source={{
                      uri: data?.supportedCurrenciesMap?.USD?.icon,
                    }}
                  />
                </>
              ) : (
                <></>
              )}
            </View>
          </View>

          <View style={Styles.exchangeInputView}>
            <Text
              style={{
                ...Styles.exchangeInput,
                color: isDark ? 'whitesmoke' : palette.primaryDark,
              }}>
              0
            </Text>
          </View>
        </View>

        <Keypad colorMode={colorScheme} />
      </View>
    </SafeAreaView>
  );
}
