import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  searchTextField: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 250,
    maxWidth: 297,
    height: 36,
    backgroundColor: '#F4EEF7',
    borderRadius: 14,
    paddingLeft: 16,
    paddingRight: 30,
  },
  search: {
    position: 'absolute',
    right: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
