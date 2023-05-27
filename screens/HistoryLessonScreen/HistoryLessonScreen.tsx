import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import styles from './styles'
import TextStyled from '../../components/TextStyled'
import { lessonOptions } from './config'
import LidMagnet from '../../components/LidMagnet/LidMagnet'
import ButtonStyled from '../../components/ButtonStyled/ButtonStyled'

const HistoryLessonScreen = ({ route, navigation }) => {
  const { id, title } = route.params

  return (
    <>
      <Header noIcons />
      <View style={styles.historyLesson}>
        <TextStyled variant="lessonTitle">{title}</TextStyled>
        <View style={styles.lidMagnet}>
          {lessonOptions.map((option) => (
            <LidMagnet
              key={option}
              title={option}
              onPress={() => navigation.navigate('#')}
            />
          ))}
        </View>
        <View style={styles.button}>
          <ButtonStyled
            onPress={() => {}}
            title="Пройти тестирование"
            linkToAction
          />
        </View>
      </View>
    </>
  )
}

export default HistoryLessonScreen
