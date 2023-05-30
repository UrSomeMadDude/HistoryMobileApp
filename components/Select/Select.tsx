import { View, Text } from 'react-native'
import React, { useState } from 'react'
/* import RNPickerSelect from 'react-native-picker-select' */
import { Picker, PickerProps } from '@react-native-picker/picker'

interface IOption {
  label: string
  value: string | Number
}

interface ISelect extends PickerProps {
  options?: IOption[]
  placeholder?: string
  onChange: () => void
  error?: string
}

const Select: React.FC<ISelect> = ({
  onChange,
  options = [],
  error = '',
  placeholder = '',
  ...props
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState()
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
      <Picker
        onValueChange={onChange}
        {...props}
      >
        {options.map((option, i) => (
          <Picker.Item
            key={i}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
      {/* <RNPickerSelect
        onValueChange={onChange}
        pickerProps={{
          style: {
            color: '#000',
          },
        }}
        placeholder={{
          label: placeholder,
          color: 'rgba(0, 0, 0, 0.41)',
          value: '',
        }}
        items={options}
      /> */}
    </View>
  )
}

export default Select
