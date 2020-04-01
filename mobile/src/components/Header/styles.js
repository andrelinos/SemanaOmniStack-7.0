import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
    paddingHorizontal: 12,
    paddingBottom: 7,
    paddingTop: Constants.statusBarHeight + 20,
    borderBottomWidth: 0.5,
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
    }
  }

)