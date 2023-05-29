import {
  View,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'
import React, { useState } from 'react'
import styles, { optionsListFirst, optionsListSecond } from './styles'
import TextStyled from '../../components/TextStyled'
import SearchTextField from '../../components/SearchTextField/SearchTextField'
import Header from '../../components/Header/Header'
import { themesList } from './config'
import ModalWindow from '../../components/ModalWindow/ModalWindow'

const HistoryScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [themeOptions, setThemeOptions] = useState([...optionsListFirst])

  //временное решение для реализации логики серча
  const [themes, setThemes] = useState(themesList)
  const [text, setText] = useState('')

  return (
    <KeyboardAvoidingView>
      <ModalWindow
        isVisible={modalVisible}
        onAction={() => {
          navigation.navigate('HistoryLesson', {
            title:
              'Внешнеполитические связи России с Европой и Азией в конце XVI — начале XVII в.',
            id: 1,
          })
          setModalVisible(false)
        }}
        onClose={() => setModalVisible(false)}
        options={themeOptions}
      />
      <Header text='История' />
      <TouchableOpacity
        onPress={() => {
          Keyboard.dismiss()
        }}
        activeOpacity={1}
      >
        <View style={styles.searchText}>
          <SearchTextField
            title='Поиск по темам'
            value={text}
            onChange={(text) => {
              setText(text)
              if (text === '') {
                setThemes(themeOptions)
              }
              setThemes(
                themesList.filter((theme) =>
                  theme.toLowerCase().includes(text.toLowerCase())
                )
              )
            }}
          />
        </View>
        <ScrollView
          nestedScrollEnabled
          contentContainerStyle={{
            display: 'flex',
            width: '100%',
          }}
        >
          <View style={styles.history}>
            {themes.map((theme, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setThemeOptions(optionsListSecond)
                  setModalVisible(true)
                }}
              >
                <TextStyled variant='sectionTitle'>{theme}</TextStyled>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default HistoryScreen
