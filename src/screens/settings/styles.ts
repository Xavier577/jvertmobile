import {StyleSheet} from 'react-native';
import {palette} from '../../theme/colors';

export default StyleSheet.create({
  rootView: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: palette.primaryLight,
    paddingHorizontal: 10,
    height: '100%',
  },
  text: {
    color: palette.primaryDark,
  },
});
