import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainer: {
    alignItems: 'flex-start',
    width: 400,
    height: 100
  },
  lineItem: {
    // flex: 1,
    flexDirection:'row',
  },
  leftItem: {
    flex: 3,
    // justifyContent: 'center',
  },
  rightItem: {
    flex: 1,
    // justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  value: {
    fontSize: 16,
    fontWeight: '300',
  },
  refreshButton: {
    marginTop: 40
  },
  refreshButtonText: {
    color: '#1976D2',
    fontWeight: '700'
  }
});