import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },

  feedItem: {
    marginTop: 12,
  },

  feedItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  userInfGrop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userInfo: {
    marginLeft: 8,
  },

  author: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  avatar: {
    width: 32,
    height: 32,
    backgroundColor: '#222',
    borderRadius: 32,
    borderWidth: 1.5,
    borderColor: '#ED4C67',
  },

  place: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#999',
  },
  moreArea: {
    height: 20,
    width: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  more: {
    transform: [{ rotate: '90deg' }, { scale: 1.2 }],
  },

  feedImage: {
    width: '100%',
    height: 400,
    marginVertical: 8,
  },

  feddItemFooter: {
    paddingTop: 12,
    paddingHorizontal: 12,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },

  action: {
    marginRight: 5,
  },

  actionGroup: {
    flexDirection: 'row',
  },
});
