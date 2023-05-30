import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import TextStyled from '../TextStyled'

const NewsItem = () => {
  return (
    <View style={styles.newsItem}>
      <View style={styles.outline}>
        <TextStyled variant='sectionOption'>Название новости</TextStyled>
      </View>
      <View style={styles.text}>
        <TextStyled variant='news'>
          Текст новости текст новости текст новости текст новости текст
          новости...
        </TextStyled>
      </View>
      <View style={styles.image}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/1356_%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%B7%D0%B0%D1%82%D0%BE%D0%BF%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC_%D0%BA%D0%BE%D1%80%D0%B0%D0%B1%D0%BB%D1%8F%D0%BC.jpg',
          }}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 14,
          }}
        />
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>12 июл. 2023</Text>
      </View>
    </View>
  )
}

export default NewsItem
