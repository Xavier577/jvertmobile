import {StyleSheet, Dimensions} from 'react-native';
import {palette} from './colors';

export const windowDimensions = Dimensions.get('window');

export default StyleSheet.create({
  /** IOS only style*/
  safeAreaView: {
    flex: 1,
  },
  rootView: {
    backgroundColor: palette.primaryLight,
    flex: 1,
  },
  text: {
    color: palette.primaryDark,
  },
});
