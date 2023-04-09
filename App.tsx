import * as Font from 'expo-font'
import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import globalStyles from './globalStyles'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './screens/MainScreen'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import ButtonStyled from './components/ButtonStyled/ButtonStyled'
import RegistrationScreen from './screens/RegistrationScreen'

export default function App() {
  const Stack = createNativeStackNavigator()

  const [fontsLoaded, setFontsLoaded] = useState(false)

  const getFonts = () =>
    Font.loadAsync({
      'commissioner-regular': require('./assets/fonts/Commissioner-Regular.ttf'),
      'commissioner-bold': require('./assets/fonts/Commissioner-Bold.ttf'),
    }).then(() => setFontsLoaded(true))

  useEffect(() => {
    getFonts()
  }, [])

  if (fontsLoaded) {
    return (
      <SafeAreaView style={globalStyles.droidSafeArea}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name='Login'
              component={LoginScreen}
            />
            <Stack.Screen
              name='Register'
              component={RegistrationScreen}
            />
            <Stack.Screen
              name='Main'
              component={MainScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    )
  } else {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    )
  }
}
