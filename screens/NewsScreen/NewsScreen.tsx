import { View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import styles from './styles'
import NewsItem from '../../components/NewsItem/NewsItem'

const NewsScreen = () => {
  return (
    <>
      <Header text='Новости' />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <View style={styles.news}>
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => {}}
            >
              <NewsItem />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default NewsScreen
