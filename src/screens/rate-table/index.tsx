import React, {useState} from 'react';
import {Text, useColorScheme, View, Platform} from 'react-native';
import GlobalStyles from '../../theme/styles.global';
import {palette} from '../../theme/colors';
import {Picker, PickerIOS} from '@react-native-picker/picker';

export default function RateTableScreen() {
  const isDark = useColorScheme() === 'dark';

  const [selectedCurr, setSelectedCurr] = useState<any>('Monday');
  return (
    <View
      style={{
        ...GlobalStyles.rootView,
        justifyContent: 'center',
        backgroundColor: isDark ? palette.primaryDark : palette.primaryLight,
      }}>
      <Text
        style={{
          ...GlobalStyles.text,
          color: isDark ? palette.primaryLight : palette.primaryDark,
        }}>
        Rate Table
        {Platform.OS === 'ios' ? (
          <PickerIOS
            style={{flex: 1, backgroundColor: 'red'}}
            selectedValue={selectedCurr}
            onValueChange={value => setSelectedCurr(value)}>
            <PickerIOS.Item label={'Monday'} value={'Monday'} />
            <PickerIOS.Item label={'Tuesday'} value={'Tuesday'} />
            <PickerIOS.Item label={'Wednesday'} value={'Wednesday'} />
          </PickerIOS>
        ) : (
          <Picker
            style={{width: 400, height: 50, backgroundColor: 'red'}}
            selectedValue={selectedCurr}
            onValueChange={value => setSelectedCurr(value)}>
            <Picker.Item label={'Monday'} value={'Monday'} />
            <Picker.Item label={'Tuesday'} value={'Tuesday'} />
            <Picker.Item label={'Wednesday'} value={'Wednesday'} />
          </Picker>
        )}
      </Text>
    </View>
  );
}
