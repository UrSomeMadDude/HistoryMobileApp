import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Header from '../../components/Header/Header'
import TextStyled from '../../components/TextStyled'
import { tourism } from '../TourismScreen/config'
import ButtonStyled from '../../components/ButtonStyled/ButtonStyled'

const TourismOptionScreen = ({ route, navigation }) => {
  const { id, title, image } = route.params

  return (
    <>
      <Header noIcons />
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={{
          paddingBottom: 70,
        }}
      >
        <View style={styles.tourism}>
          <TextStyled variant='profileName'>{title}</TextStyled>
          <View style={styles.underline}></View>
          <View style={styles.text}>
            <TextStyled variant='regular'>
              Описание маршрута Описание маршрута Описание маршрута Описание
              маршрута Описание маршрута Описание маршрута Описание маршрута
              Описание маршрута Описание маршрута Описание маршрута Описание
              маршрута Описание маршрута Описание маршрута Описание маршрута
              Описание маршрута Описание маршрута Описание маршрута Описание
              маршрута Описание маршрута Описание маршрута Описание маршрута
              Описание маршрута Описание маршрута Описание маршрута Описание
              маршрута
            </TextStyled>
          </View>
          <View style={styles.photoTitle}>
            <TextStyled variant='regular'>Фотоальбом</TextStyled>
          </View>
          <ScrollView
            nestedScrollEnabled
            horizontal
            style={{
              marginLeft: 30,
              marginTop: 15,
              marginRight: 30,
            }}
            contentContainerStyle={{
              gap: 16,
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Image
                key={item}
                source={{ uri: tourism[id - 1].image }}
                style={{
                  width: 227,
                  height: 223,
                  borderRadius: 14,
                }}
              />
            ))}
          </ScrollView>
          <View
            style={{
              marginTop: 50,
            }}
          >
            <ButtonStyled
              onPress={() => {}}
              title='Показать маршрут'
              linkToAction
            />
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default TourismOptionScreen
