import { View, Text } from 'react-native'
import React from 'react'
import TextStyled from './TextStyled'

interface IError {
  text: string
}

const ErrorMessage = (props: IError) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
      }}
    >
      <TextStyled variant="error">{props.text}</TextStyled>
    </View>
  )
}

export default ErrorMessage
