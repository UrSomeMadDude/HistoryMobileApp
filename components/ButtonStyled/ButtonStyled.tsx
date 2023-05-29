import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import buttonStyles from './buttonStyles'
import TextStyled from '../TextStyled'

interface IButtonProps extends TouchableOpacityProps {
  onPress: () => void
  title: string
  color?: 'primary' | 'secondary'
  size?: string
  disabled?: boolean
  linkToAction?: boolean
}

const buttonColors = {
  primary: '#990061',
  secondary: '#40005E',
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
      disabled={props.disabled}
      style={
        !props.linkToAction
          ? [
              buttonStyles.button,
              {
                backgroundColor: buttonColors[props.color],
                width: buttonSizes[props.size].width,
                height: buttonSizes[props.size].height,
                opacity: props.disabled ? 0.5 : 1,
              },
            ]
          : buttonStyles.actionButton
      }
      {...props}
    >
      {props.linkToAction ? (
        <Text style={buttonStyles.buttonText}>{props.title}</Text>
      ) : (
        <TextStyled variant='h5'> {props.title} </TextStyled>
      )}
    </TouchableOpacity>
  )
}

export default ButtonStyled
