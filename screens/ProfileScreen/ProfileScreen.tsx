import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import styles from './styles'
import TextStyled from '../../components/TextStyled'
import LidMagnet from '../../components/LidMagnet/LidMagnet'
import { info } from './config'

const ProfileScreen = () => {
  return (
    <>
      <Header
        text="Профиль"
        icon="menu-outline"
      />
      <View style={styles.profile}>
        <TextStyled variant="profileName">Евгения Олеговна </TextStyled>
        <TextStyled variant="profileName"> Онегина</TextStyled>
        <View style={styles.profilePhoto}>
          <View style={styles.image}>
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              source={require('../../assets/imgDogCard.png')}
            />
          </View>
          <View style={styles.points}>
            <TextStyled variant="regular">Накопленные баллы</TextStyled>
            <Text style={styles.number}>240</Text>
          </View>
        </View>
        <View style={styles.personalInfo}>
          <Text style={styles.text}>Личная информация:</Text>
          <LidMagnet
            disabled
            title="Университет"
            subtext={info.university}
          />
          <LidMagnet
            disabled
            title="Курс"
            subtext={`${info.course} курс`}
          />
          <LidMagnet
            disabled
            title="Телефон"
            subtext={info.phone_number}
          />
        </View>
      </View>
    </>
  )
}

export default ProfileScreen
