import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  screenRootView: {
    justifyContent: 'center',
    alignContent: 'center',
  },

  currencyConversionScreenView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flex: 1,
  },

  exchangedOutputViewContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  exchangeOutputView: {
    width: 300,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  exchangeOutputValue: {
    fontSize: 20,
  },

  currencySelectorView: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
  },

  currencyFromSelector: {
    width: 100,
    height: 50,
    backgroundColor: 'rgba(217,217,217,0.1)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 5,
  },

  currencyToSelector: {
    width: 100,
    height: 50,
    backgroundColor: 'rgba(217,217,217,0.1)',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 5,
  },

  currencyName: {
    fontSize: 18,
  },

  currencyFlag: {
    width: 30,
    height: 22.5,
  },

  exchangeInputView: {
    height: 50,
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  exchangeInput: {
    fontSize: 24,
    marginRight: 25,
  },
});
