import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

interface ILidMagnet {
  title: string
  subtext?: string | number
  onPress?: () => void
  disabled?: boolean
}

const LidMagnet: React.FC<ILidMagnet> = ({
  onPress = () => {},
  title,
  subtext = '',
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
    >
      <View style={disabled ? styles.lidMagnetAlternative : styles.lidMagnet}>
        <Text
          style={
            disabled
              ? [styles.lidMagnetText, { color: '#313131', marginLeft: 12 }]
              : styles.lidMagnetText
          }
        >
          {title}
        </Text>
        <Text style={styles.subtext}>{subtext}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default LidMagnet
