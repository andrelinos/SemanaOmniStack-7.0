import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
    paddingHorizontal: 12,
    paddingBottom: 7,
    paddingTop: Constants.statusBarHeight + 15,
    borderBottomWidth: 0.5,
    borderColor: '#bbb',
  },

  group: {
    flexDirection: 'row',
  },

  camera: {
    width: 19,
    height: 18,
    marginRight: 7,
  },

  logo: {
    width: 95,
    height: 27,
  },

  send: {
    width: 21,
    height: 18,
  },
});
