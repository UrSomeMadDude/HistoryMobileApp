import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  image: {
    marginTop: 30,
  },
  text: {
    marginTop: 20,
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 28,
    backgroundColor: '#E3D5EB',
    paddingTop: 48,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 40,
    borderRadius: 30,
    marginTop: 30,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
})
