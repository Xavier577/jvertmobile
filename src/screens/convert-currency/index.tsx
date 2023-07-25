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
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <View
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* space */}

            <View
              style={{
                width: 300,
                height: 100,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: isDark
                      ? palette.textColorDarkMode
                      : palette.textColorLightMode,
                  }}>
                  $20
                </Text>
              </View>
            </View>

            {/* space */}
          </View>

          <View
            style={{
              height: 100,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 25,
            }}>
            <View
              style={{
                width: 100,
                height: 50,
                backgroundColor: 'rgba(217,217,217,0.1)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                paddingHorizontal: 5,
              }}>
              {data != null ? (
                <>
                  <Text
                    style={{
                      fontSize: 18,
                      color: isDark
                        ? palette.textColorDarkMode
                        : palette.textColorLightMode,
                    }}>
                    {data?.supportedCurrenciesMap?.NGN?.currencyCode}
                  </Text>
                  <Image
                    style={{
                      width: 30,
                      height: 22.5,
                    }}
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

            <View
              style={{
                width: 100,
                height: 50,
                backgroundColor: 'rgba(217,217,217,0.1)',
                display: 'flex',
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                paddingHorizontal: 5,
              }}>
              {data != null ? (
                <>
                  <Text
                    style={{
                      fontSize: 18,
                      color: isDark ? 'whitesmoke' : palette.primaryDark,
                    }}>
                    {data?.supportedCurrenciesMap?.USD?.currencyCode}
                  </Text>

                  <Image
                    style={{
                      width: 30,
                      height: 22.5,
                    }}
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

          <View
            style={{
              height: 50,
              display: 'flex',
              flexDirection: 'row-reverse',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                marginRight: 25,
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
