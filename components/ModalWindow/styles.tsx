import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  modalView: {
    minHeight: 350,
    maxHeight: 500,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'scroll',
  },

  list: {
    display: 'flex',
    maxWidth: '90%',
    minWidth: 300,
    height: 320,
    overflow: 'scroll',
  },

  subList: {
    gap: 10,
    overflow: 'scroll',
  },

  option: {
    lineHeight: 17,
  },
})
