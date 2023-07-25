import {StyleSheet} from 'react-native';
import {windowDimensions} from '../../../theme/styles.global';

export default StyleSheet.create({
  keypad: {
    backgroundColor: 'transparent',
    height: windowDimensions.height / 2,
    display: 'flex',
    flexDirection: 'column',
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(177,177,177, 0.17)',
    paddingVertical: 5,
  },

  keypadRow: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  },

  keypadColumn: {
    width: 80,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  key: {
    fontSize: 24,
  },
});
