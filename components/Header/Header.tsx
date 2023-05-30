import { TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import TextStyled from '../TextStyled'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation, StackActions } from '@react-navigation/native'

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
  const [isTapped, setIsTapped] = useState(false)

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
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.pop())}
        >
          <Ionicons
            name='chevron-back-outline'
            size={24}
            color='#3C1251'
          />
        </TouchableOpacity>
        <TextStyled variant='headerTitle'>{text}</TextStyled>
      </View>
    )
  }
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.push('News'))}
      >
        <Ionicons
          name='newspaper-outline'
          size={24}
          color='#3C1251'
        />
      </TouchableOpacity>
      <TextStyled variant='headerTitle'>{text}</TextStyled>

      <TouchableOpacity
        style={
          noIcons && isTapped
            ? [styles.button, styles.transformed]
            : styles.button
        }
        onPress={
          icon !== 'menu-outline'
            ? () => navigation.dispatch(StackActions.push('Profile'))
            : () => {
                setIsTapped(!isTapped)
              }
        }
      >
        <Ionicons
          name={icon}
          size={24}
          color='#3C1251'
        />
      </TouchableOpacity>
      {isTapped && (
        <TouchableOpacity
          style={styles.shop}
          onPress={() => {}}
        >
          <Ionicons
            name='cart-outline'
            size={24}
            color='#3C1251'
          />
        </TouchableOpacity>
      )}
      {isTapped && (
        <TouchableOpacity
          style={styles.exit}
          onPress={() => {
            navigation.dispatch(StackActions.popToTop())
            navigation.dispatch(StackActions.replace('Login'))
          }}
        >
          <Ionicons
            name='exit-outline'
            size={24}
            color='#3C1251'
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Header
