import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import styles from './styles'
import { victorins } from './config'

const VictorinsScreen = () => {
  return (
    <>
      <Header text="Викторины" />
      <ScrollView>
        <View style={styles.victorins}>
          {victorins.map((victorin) => (
            <TouchableOpacity
              key={victorin.id}
              onPress={() => {}}
            >
              <View style={styles.option}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  source={require('../../assets/victorin.png')}
                />
                <Text style={styles.text}>Пример Викторины</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default VictorinsScreen
