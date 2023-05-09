import { View, Text } from 'react-native'
import React from 'react'
import RNPickerSelect from 'react-native-picker-select'
import ErrorMessage from '../ErrorMessage'
import TextStyled from '../TextStyled'

interface IOption {
  label: string
  value: string | Number
}

interface ISelect {
  options: IOption[]
  placeholder: string
  onChange: () => void
  error?: string
}

const Select = (props: ISelect) => {
  return (
    <View
      style={{
        flex: 1,
        maxHeight: 52,
        minHeight: 52,
        alignSelf: 'stretch',
        borderRadius: 14,
        overflow: 'hidden',
        backgroundColor: '#DFD0E8',
      }}
    >
      <RNPickerSelect
        onValueChange={props.onChange}
        pickerProps={{
          style: {
            color: '#000',
          },
        }}
        placeholder={{
          label: props.placeholder,
          color: 'rgba(0, 0, 0, 0.41)',
          value: '',
        }}
        items={props.options}
      />
    </View>
  )
}

export default Select
