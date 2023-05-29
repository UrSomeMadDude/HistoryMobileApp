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
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  text: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    lineHeight: 24.16,
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    width: 300,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: 5, height: 1 },
    textShadowRadius: 10,
  },
})
