import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  profile: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 25,
  },

  profilePhoto: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    gap: 45,
  },

  image: {
    width: 120,
    height: 120,
    borderWidth: 4,
    borderRadius: 90,
    borderColor: '#fff',
  },

  points: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
  },

  number: {
    color: '#BC0059',
    fontSize: 48,
    fontWeight: '500',
    lineHeight: 58.7,
  },

  personalInfo: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: 30,
    transform: [{ translateX: -10 }],
    gap: 23,
  },

  text: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    color: '#000',
  },
})
