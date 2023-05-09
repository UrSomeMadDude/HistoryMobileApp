import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import ButtonStyled from '../../components/ButtonStyled/ButtonStyled'
import registrationStyles from './registrationStyles'
import TextStyled from '../../components/TextStyled'
import { Form, Formik } from 'formik'
import { REG_INITIAL_VALUES, validationSchema } from './config'
import TextField from '../../components/TextField/TextField'
import Select from '../../components/Select/Select'

const RegistrationScreen = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Keyboard.dismiss()
      }}
      activeOpacity={1}
    >
      <ScrollView>
        <View style={registrationStyles.container}>
          <TextStyled variant="h4">Регистрация</TextStyled>
          <Formik
            onSubmit={(values) => console.log(values)}
            initialValues={REG_INITIAL_VALUES}
            enableReinitia
            validationSchema={validationSchema}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              errors,
              isValid,
              dirty,
            }) => {
              return (
                <View style={registrationStyles.formContainer}>
                  <TextField
                    type="text"
                    placeholder="ФИО"
                    onChange={handleChange('name')}
                    value={values.name}
                    //error={errors.name}
                  />
                  <Select
                    options={[
                      {
                        label: 'КФУ',
                        value: 'kfu',
                      },
                      {
                        label: 'СевГУ',
                        value: 'sevgu',
                      },
                      {
                        label: 'ТюмГУ',
                        value: 'tumgu',
                      },
                    ]}
                    placeholder="Выберите университет"
                    onChange={handleChange('university')}
                    //error={errors.university}
                  />
                  <Select
                    options={[
                      {
                        label: '1 курс',
                        value: '1',
                      },
                      {
                        label: '2 курс',
                        value: '2',
                      },
                      {
                        label: '3 курс',
                        value: '3',
                      },
                      {
                        label: '4 курс',
                        value: '4',
                      },
                    ]}
                    placeholder="Выберите курс"
                    onChange={handleChange('course')}
                    //error={errors.course}
                  />
                  <TextField
                    type="text"
                    placeholder="Телефон"
                    onChange={handleChange('phone_number')}
                    value={values.phone_number}
                    //error={errors.phone_number}
                  />
                  <TextField
                    type="password"
                    placeholder="Пароль"
                    onChange={handleChange('password')}
                    value={values.password}
                    //error={errors.password}
                  />
                  <TextField
                    type="password"
                    placeholder="Подтвердите пароль"
                    onChange={handleChange('confirmPassword')}
                    value={values.confirmPassword}
                    //error={errors.confirmPassword}
                  />
                  <ButtonStyled
                    disabled={!(dirty && isValid)}
                    onPress={handleSubmit}
                    title="Зарегистрироваться"
                    size="long"
                    color="primary"
                  />
                </View>
              )
            }}
          </Formik>
        </View>
      </ScrollView>
    </TouchableOpacity>
  )
}

export default RegistrationScreen
