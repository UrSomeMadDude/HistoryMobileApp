import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import TextStyled from '../TextStyled'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps {
  text?: string
  icon?: any
  noIcons?: boolean
}

const Header: React.FC<HeaderProps> = ({
  text = '',
  icon = 'person-outline',
  noIcons = false,
}) => {
  const navigation = useNavigation()
  if (noIcons) {
    return (
      <View
        style={[
          styles.header,
          {
            justifyContent: 'flex-start',
          },
        ]}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color="#3C1251"
          />
        </TouchableOpacity>
        <TextStyled variant="headerTitle">{text}</TextStyled>
      </View>
    )
  }
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Ionicons
          name="newspaper-outline"
          size={24}
          color="#3C1251"
        />
      </TouchableOpacity>
      <TextStyled variant="headerTitle">{text}</TextStyled>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Ionicons
          name={icon}
          size={24}
          color="#3C1251"
        />
      </TouchableOpacity>
    </View>
  )
}

export default Header
