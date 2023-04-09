import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import buttonStyles from './buttonStyles'
import TextStyled from '../TextStyled'

interface IButtonProps {
  onPress: () => void
  title: string
  color: string
  size: string
}

const buttonColors = {
  primary: '#40005ED9',
  secondary: '#C53180',
}

const buttonSizes = {
  short: {
    height: 44,
    width: 150,
  },
  long: {
    height: 44,
    width: 263,
  },
}

const ButtonStyled = (props: IButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      touchSoundDisabled
      style={[
        buttonStyles.button,
        {
          backgroundColor: buttonColors[props.color],
          width: buttonSizes[props.size].width,
          height: buttonSizes[props.size].height,
        },
      ]}
    >
      <TextStyled variant='h5'> {props.title} </TextStyled>
    </TouchableOpacity>
  )
}

export default ButtonStyled
