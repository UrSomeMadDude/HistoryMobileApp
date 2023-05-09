import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { ChangeEvent, useState } from 'react'
import textFieldStyles from './textFieldStyles'
import TextStyled from '../TextStyled'
import Icon from 'react-native-vector-icons/Ionicons'
import ErrorMessage from '../ErrorMessage'

interface ITextFieldProps {
  value: string
  onChange: (e: string | ChangeEvent<any>) => void
  placeholder: string
  type: string
  error?: string
}

const TextField = (props: ITextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View
      style={{
        position: 'relative',
      }}
    >
      <TextInput
        style={textFieldStyles.textField}
        placeholder={props.placeholder}
        onChangeText={props.onChange}
        value={props.value}
        secureTextEntry={props.type === 'password' && !showPassword}
      />

      {props.type === 'password' && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 12,
            left: 225,
          }}
          onPress={() => setShowPassword(!showPassword)}
        >
          {!showPassword ? (
            <Icon
              style={{
                fontSize: 22,
              }}
              name="eye"
            />
          ) : (
            <Icon
              style={{
                fontSize: 22,
              }}
              name="eye-off"
            />
          )}
        </TouchableOpacity>
      )}
      {props.error && <ErrorMessage text={props.error} />}
    </View>
  )
}

export default TextField
