import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#40005E',
    padding: 8,
    backgroundColor: '#E6D5EE',
    opacity: 0.95,
    position: 'relative',
  },

  button: {
    zIndex: 1,
  },

  transformed: {
    transform: [{ rotateZ: '90deg' }],
  },

  dropdownList: {
    position: 'absolute',
    top: '150%',
    right: 36,
    gap: 10,
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid black',
    backgroundColor: '#F0EAF3',
    padding: 10,
    paddingTop: 40,
    transform: [{ translateY: -40 }],
    borderRadius: 14,
  },

  shop: {
    position: 'absolute',
    top: '35%',
    left: '95%',
  },

  exit: {
    position: 'absolute',
    top: '35%',
    left: '75%',
  },
})
