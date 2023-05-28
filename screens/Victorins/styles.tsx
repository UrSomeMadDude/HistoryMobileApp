import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  victorins: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 30,
    height: '100%',
    width: '100%',
    backgroundColor: '#FCFCFC',
    gap: 30,
    paddingBottom: 50,
  },

  option: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 309,
    height: 100,
    borderRadius: 14,
    border: '1px solid #CECECE',
  },
  text: {
    position: 'absolute',
    top: 8,
    left: 13,
    lineHeight: 16,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    width: 145,
  },
})
