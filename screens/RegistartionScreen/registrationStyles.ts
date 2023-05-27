import { StyleSheet } from 'react-native'

const registrationStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    gap: 15,
    paddingTop: 50,
    paddingBottom: 150,
    backgroundColor: '#FCFCFC',
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
  },
})

export default registrationStyles
