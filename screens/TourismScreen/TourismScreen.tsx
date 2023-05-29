import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import styles from './styles'

import { tourism } from './config'
import {
  StackActions,
  StackRouter,
  useNavigation,
} from '@react-navigation/native'

const TourismScreen = () => {
  const navigation = useNavigation()
  return (
    <>
      <Header text='Студтуризм' />
      <ScrollView>
        <View style={styles.victorins}>
          {tourism.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.dispatch(
                  StackActions.push('TourismOption', {
                    id: item.id,
                    title: item.title,
                    image: item.image,
                  })
                )
              }
            >
              <View style={styles.option}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    alignSelf: 'center',
                    resizeMode: 'stretch',
                    borderRadius: 14,
                  }}
                  source={{
                    uri: item.image,
                  }}
                />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default TourismScreen
