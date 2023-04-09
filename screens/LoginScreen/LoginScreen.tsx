import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  Keyboard,
} from 'react-native'
import React, { ReactElement } from 'react'
import TextStyled from '../../components/TextStyled'
import loginStyles from './loginStyles'
import { Formik } from 'formik'
import TextField from '../../components/TextField/TextField'
import ButtonStyled from '../../components/ButtonStyled/ButtonStyled'

const INITIAL_VALUES = {
  login: '',
  password: '',
}

const LoginScreen = ({ navigation }): ReactElement<React.FC> => {
  return (
    <TouchableOpacity
      onPress={() => {
        Keyboard.dismiss()
      }}
      activeOpacity={1}
    >
      <View style={loginStyles.container}>
        <View style={loginStyles.image}>
          <Image source={require('../../assets/logo.png')} />
        </View>
        <View style={loginStyles.text}>
          <TextStyled variant='h2'>Авторизация</TextStyled>
        </View>
        <Formik
          enableReinitialize
          initialValues={INITIAL_VALUES}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <View style={loginStyles.formContainer}>
              <TextField
                type='text'
                placeholder='Логин'
                onChange={handleChange('login')}
                value={values.login}
              />
              <TextField
                type='password'
                placeholder='Введите пароль'
                onChange={handleChange('password')}
                value={values.password}
              />
              <View style={loginStyles.buttonContainer}>
                <ButtonStyled
                  onPress={() => {
                    handleSubmit()
                  }}
                  title='Вход'
                  size='short'
                  color='primary'
                />
                <TextStyled variant='regular'>или</TextStyled>
                <ButtonStyled
                  onPress={() => {
                    navigation.navigate('Register')
                  }}
                  title='Регистрация'
                  size='long'
                  color='primary'
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </TouchableOpacity>
  )
}

export default LoginScreen
