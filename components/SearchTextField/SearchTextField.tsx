import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'

interface ISearchTextField {
  title?: string
  onChange?: (e: any) => void
  value?: string
}

const SearchTextField: React.FC<ISearchTextField> = ({
  title = '',
  value,
  onChange,
}) => {
  return (
    <View style={styles.searchTextField}>
      <TextInput
        placeholder={title}
        onChangeText={onChange}
        value={value}
      />
      <View style={styles.search}>
        <Icon
          name="search-outline"
          size={13}
        />
      </View>
    </View>
  )
}

export default SearchTextField
