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
    display: 'flex',
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
  formSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 19,
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 28,
    backgroundColor: '#F2ECF5',
    paddingTop: 29,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 29,
    borderRadius: 30,
    marginTop: 30,
  },
})
