import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonStyled from '../components/ButtonStyled/ButtonStyled'

const RegistrationScreen = ({ navigation }) => {
  return (
    <View>
      <Text>RegistrationScreen</Text>
      <ButtonStyled
        color='primary'
        size='short'
        title='go to login'
        onPress={() => navigation.replace('Login')}
      ></ButtonStyled>
    </View>
  )
}

export default RegistrationScreen
