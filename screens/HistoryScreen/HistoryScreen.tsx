import {
  View,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'
import React from 'react'
import styles, { optionsListFirst, optionsListSecond } from './styles'
import TextStyled from '../../components/TextStyled'
import SearchTextField from '../../components/SearchTextField/SearchTextField'
import Header from '../../components/Header/Header'

const HistoryScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={{
        paddingBottom: 50,
      }}
    >
      <Header text="История" />
      <TouchableOpacity
        onPress={() => {
          Keyboard.dismiss()
        }}
        activeOpacity={1}
      >
        <ScrollView nestedScrollEnabled>
          <View style={styles.history}>
            <SearchTextField title="Поиск по темам" />
            <TextStyled variant="sectionTitle">
              ИСТОРИЯ РОССИИ С ДРЕВНЕЙШИХ ВРЕМЕН ДО НАЧАЛА XVI В.
            </TextStyled>
            <View style={styles.list}>
              <ScrollView nestedScrollEnabled>
                <View style={styles.subList}>
                  {optionsListFirst.map((option, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() =>
                        navigation.navigate('HistoryLesson', {
                          title: option,
                          id: i,
                        })
                      }
                    >
                      <TextStyled variant="sectionOption">{option}</TextStyled>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>

            <TextStyled variant="sectionTitle">
              ИСТОРИЯ РОССИИ (XVI-XVII ВВ.)
            </TextStyled>

            <View style={styles.list}>
              <ScrollView nestedScrollEnabled>
                <View style={styles.subList}>
                  {optionsListSecond.map((option, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() =>
                        navigation.push('HistoryLesson', {
                          title: option,
                          id: i,
                        })
                      }
                    >
                      <TextStyled variant="sectionOption">{option}</TextStyled>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default HistoryScreen
