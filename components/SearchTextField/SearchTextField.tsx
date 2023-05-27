import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'

interface ISearchTextField {
  title?: string
  onChange?: () => void
}

const SearchTextField: React.FC<ISearchTextField> = ({
  title = '',
  onChange,
}) => {
  return (
    <View style={styles.searchTextField}>
      <TextInput
        placeholder={title}
        onChange={onChange}
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
