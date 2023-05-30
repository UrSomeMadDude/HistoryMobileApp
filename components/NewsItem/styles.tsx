import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  newsItem: {
    display: 'flex',
    alignItems: 'flex-start',
    width: 309,
    height: 189,
    borderWidth: 1,
    borderColor: '#CECECE',
    borderRadius: 14,
    position: 'relative',
  },

  outline: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#CECECE',
    width: '100%',
    height: 42,
    paddingTop: 11,
    paddingLeft: 15,
  },

  text: {
    width: 200,
    paddingTop: 6,
    paddingLeft: 16,
  },

  image: {
    position: 'absolute',
    right: 14,
    bottom: 13,
    width: 83,
    height: 100,
    borderRadius: 14,
  },

  dateContainer: {
    position: 'absolute',
    left: 17,
    bottom: 13,
  },

  date: {
    color: '#7D7D7D',
    fontSize: 12,
    fontWeight: '400',
  },
})
