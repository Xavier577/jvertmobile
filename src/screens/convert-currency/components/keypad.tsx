import React from 'react';
import {GestureResponderEvent, Pressable, Text, View} from 'react-native';
import KeypadStyles from './keypad.styles';
import {palette} from '../../../theme/colors';
import {Instantiable} from '../../../utils/instantiable';

class Key extends Instantiable<Key> {
  public id!: string;
  public value!: any;
}

enum KEY_IDS {
  NUM_KEY = 'numberKey',
  BACKSPACE = 'backspaceKey',
  ENTER_KEY = 'enterKey',
}

const keypadNumbers: Key[][] = [
  [
    new Key({id: KEY_IDS.NUM_KEY, value: 1}),
    new Key({id: KEY_IDS.NUM_KEY, value: 2}),
    new Key({id: KEY_IDS.NUM_KEY, value: 3}),
  ],
  [
    new Key({id: KEY_IDS.NUM_KEY, value: 4}),
    new Key({id: KEY_IDS.NUM_KEY, value: 5}),
    new Key({id: KEY_IDS.NUM_KEY, value: 6}),
  ],
  [
    new Key({id: KEY_IDS.NUM_KEY, value: 7}),
    new Key({id: KEY_IDS.NUM_KEY, value: 8}),
    new Key({id: KEY_IDS.NUM_KEY, value: 9}),
  ],
  [
    new Key({id: KEY_IDS.BACKSPACE, value: 'X'}),
    new Key({id: KEY_IDS.NUM_KEY, value: 0}),
    new Key({id: KEY_IDS.ENTER_KEY, value: '>'}),
  ],
];

export interface KeypadProps {
  colorMode?: 'light' | 'dark' | null;
  numberKeyPressAction?: (e: GestureResponderEvent) => void;
  backspaceKeyPressAction?: (e: GestureResponderEvent) => void;
  enterKeyPressAction?: (e: GestureResponderEvent) => void;
}

export default function Keypad({
  colorMode = 'light',
  numberKeyPressAction,
  backspaceKeyPressAction,
  enterKeyPressAction,
}: KeypadProps) {
  const isDark = colorMode === 'dark';

  return (
    <View style={KeypadStyles.keypad}>
      {keypadNumbers.map((keyRow, idx) => (
        <View style={KeypadStyles.keypadRow} key={idx}>
          {keyRow.map((key, col_idx) => (
            <View
              style={KeypadStyles.keypadColumn}
              key={`${key.id}_${col_idx}`}>
              <Pressable
                onPress={
                  key.id === KEY_IDS.BACKSPACE
                    ? backspaceKeyPressAction
                    : key.id === KEY_IDS.ENTER_KEY
                    ? enterKeyPressAction
                    : numberKeyPressAction
                }>
                <Text
                  style={{
                    ...KeypadStyles.key,
                    color: isDark
                      ? palette.textColorDarkMode
                      : palette.textColorLightMode,
                  }}>
                  {key.value}
                </Text>
              </Pressable>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
