import {StyleSheet} from 'react-native';
import {palette} from './colors';

export default StyleSheet.create({
  rootView: {
    backgroundColor: palette.primaryLight,
    flex: 1,
  },
  text: {
    color: palette.primaryDark,
  },
});
