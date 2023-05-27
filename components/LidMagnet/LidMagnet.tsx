import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

interface ILidMagnet {
  title: string
  onPress: () => void
}

const LidMagnet: React.FC<ILidMagnet> = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.lidMagnet}>
        <Text style={styles.lidMagnetText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default LidMagnet
